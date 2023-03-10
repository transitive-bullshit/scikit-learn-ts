import pythonBridge, {
  type PythonBridge,
  type PythonBridgeOptions
} from '@fisch0920/python-bridge'

export type { PythonBridge }

/**
 * The version of the python `scikit-learn` module this package was built with.
 *
 * Other versions may work, but there may be minor differences in the generated
 * types. We recommend against using other major versions.
 */
export const SCIKIT_LEARN_VERSION = '1.2.1'

const PB = pythonBridge as any
const [scikitLearnVersionMajor, scikitLearnVersionMinor] =
  SCIKIT_LEARN_VERSION.split('.').map((x) => parseInt(x))

export async function createPythonBridge(
  opts: PythonBridgeOptions = {}
): Promise<PythonBridge> {
  const py = PB({
    python: 'python3',
    stdio: ['pipe', 'pipe', 'pipe'],
    ...opts
  })
  await validatePythonBridge(py)
  return py
}

// TODO: validate `numpy and `sklearn`
export async function validatePythonBridge(py: PythonBridge): Promise<void> {
  await py.ex`
from platform import python_version
`

  const pyVersion: string = await py`python_version()`
  const [pyMajor, pyMinor] = pyVersion.split('.').map((x) => parseInt(x))
  if (!pyMajor) {
    throw new Error(`Invalid python version "${pyVersion}"`)
  }

  if (pyMajor < 3) {
    throw new Error(
      `Unsupported python version "${pyVersion}"; please upgrade to python 3.7 or newer`
    )
  }

  if (pyMajor === 3) {
    if (pyMinor < 7) {
      throw new Error(
        `Unsupported python version "${pyVersion}"; please upgrade to python 3.7 or newer`
      )
    }
  }

  await py.ex`
from sklearn import __version__
`

  const sklearnVersion: string = await py`__version__`
  const [sklearnMajor, sklearnMinor] = sklearnVersion
    .split('.')
    .map((x) => parseInt(x))

  if (!sklearnMajor) {
    throw new Error(
      `Invalid python scikit-learn module version "${sklearnVersion}"`
    )
  }

  if (sklearnMajor < scikitLearnVersionMajor) {
    throw new Error(
      `Unsupported python scikit-learn module version "${sklearnVersion}"; please upgrade`
    )
  }

  if (sklearnMajor === scikitLearnVersionMajor) {
    if (sklearnMinor < scikitLearnVersionMinor) {
      throw new Error(
        `Unsupported python scikit-learn module version "${sklearnVersion}"; please upgrade`
      )
    } else if (sklearnMinor > scikitLearnVersionMinor) {
      console.warn(
        `Warning: python scikit-learn module version "${sklearnVersion}" is MINOR upgrade from ${SCIKIT_LEARN_VERSION} and is untested with the current version of this library`
      )
    }
  } else if (sklearnMajor > scikitLearnVersionMajor) {
    console.warn(
      `Warning: python scikit-learn module version "${sklearnVersion}" is a MAJOR upgrade from "${SCIKIT_LEARN_VERSION}" and is untested with the current version of this library`
    )
  }
}
