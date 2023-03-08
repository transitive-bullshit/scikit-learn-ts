import camelCaseImpl, { type Options as CamelCaseOptions } from 'camelcase'
import indentString from 'indent-string'

export function indentComment(...lines: string[]): string {
  const content = lines.filter((line) => line?.trim().length > 0).join('\n\n')
  if (!content) {
    return ''
  }

  return `/**\n${indentString(content, 4)}\n   */`
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
