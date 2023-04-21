process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: [
    '@antfu',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'unused-imports'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': [1, {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: true,
      allowBind: false,
    }],
    'unused-imports/no-unused-imports': 'error',
  },
}
