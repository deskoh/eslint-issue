module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  parserOptions: {
    project: [
      './tsconfig.json'
    ],
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
      }
    ]
  },
  settings: {
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
  ]
}
