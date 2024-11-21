import camelCaseImpl, { type Options as CamelCaseOptions } from 'camelcase'
import indentString from 'indent-string'

export function indentComment(
  lines: string | (string | undefined)[],
  { indent = 4 }: { indent?: number } = {}
): string {
  lines = Array.isArray(lines) ? lines : [lines]
  const content = lines
    .filter((line) => line && line.trim().length > 0)
    .join('\n\n')
  if (!content) {
    return ''
  }
  const indentStr = ' '.repeat(Math.max(0, indent - 2))

  return `/**\n${indentString(content, indent)}\n ${indentStr}*/`
}

export function camelCase(input: string, options?: CamelCaseOptions): string {
  return camelCaseImpl(input, {
    pascalCase: false,
    preserveConsecutiveUppercase: true,
    locale: 'en-US',
    ...options
  })
}

export function pascalCase(input: string, options?: CamelCaseOptions): string {
  return camelCase(input, {
    pascalCase: true,
    ...options
  })
}

export function isValidPythonIdentifier(input: string): boolean {
  return !!input && /^[A-Z_a-z]\w*$/.test(input)
}
