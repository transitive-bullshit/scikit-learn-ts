import prettier, { type BuiltInParserName } from 'prettier'

export async function formatSource(
  source: string,
  {
    parser = 'typescript'
  }: {
    parser?: BuiltInParserName
  } = {}
): Promise<string> {
  return prettier.format(source, {
    parser,
    semi: false,
    singleQuote: true,
    useTabs: false,
    tabWidth: 2,
    bracketSpacing: true,
    arrowParens: 'always',
    trailingComma: 'none'
  })
}
