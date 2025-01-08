/*import { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'*/

//type OptionsT = OptionsConfig & Omit<TypedFlatConfigItem, 'files'>

/**
 * @typedef {import("@antfu/eslint-config").OptionsConfig} OptionsConfig
 */

/**
 * @typedef {import("@antfu/eslint-config").TypedFlatConfigItem} TypedFlatConfigItem
 */

/**
 * A custom ESLint configuration for libraries that use Hono.
 * @type {OptionsConfig | TypedFlatConfigItem}
 * */


export const eslintHonoConfig = {
  type: 'app',
  typescript: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
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
    'style/padded-blocks': ["error", {
      "classes": "always",

    }],
    'no-trailing-spaces': 'warn',
    'style/comma-dangle': 'off',
    'style/no-multiple-empty-lines': 'off',
    'import/newline-after-import': ['warn', { count: 3 }],
  }
}
