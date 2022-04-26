module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    camelcase: ['warn', { ignoreImports: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'id-match': [
      'error',
      '^[a-zA-Z0-9_$]*$',
      {
        properties: true,
        onlyDeclarations: false,
      },
    ],
  },
}
