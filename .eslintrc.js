module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 'error',
    'object-shorthand': ['error', 'always'],
  },
}
