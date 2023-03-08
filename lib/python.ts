import pythonBridge, {
  type PythonBridge,
  type PythonBridgeOptions
} from 'python-bridge'

export type { PythonBridge }

const PB = pythonBridge as any

export async function createPythonBridge(
  opts: PythonBridgeOptions = {}
): Promise<PythonBridge> {
  return PB({ python: 'python3', ...opts })
}
