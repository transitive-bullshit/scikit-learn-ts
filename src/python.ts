import pythonBridge, { type PythonBridge } from 'python-bridge'

export type { PythonBridge }

const PB = pythonBridge as any

export async function createPythonBridge(): Promise<PythonBridge> {
  return PB({ python: 'python3' })
}
