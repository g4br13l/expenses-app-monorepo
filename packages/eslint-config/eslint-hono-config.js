import antfu from "@antfu/eslint-config";

//NonNullable<Parameters<typeof antfu>[0]>

export const eslintHonoConfig = {
  type: 'app',
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  ignores: ['**/migrations/*'],
  rules: {
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: ['README.md'],
    }],
    'style/no-multiple-empty-lines': 'off',
    'import/newline-after-import': ['warn', { count: 3 }],
  }
}
