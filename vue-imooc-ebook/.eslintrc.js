module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent':'off',
  'no-trailing-spaces':'off',
    'eol-last':'off',
    'no-multiple-empty-lines':'off',
    'comma-spacing':'off',
    'object-curly-spacing':'off',
    'standard/object-curly-even-spacing':'off',
    'key-spacing':'off',
    'space-in-parens':'off',
    'space-before-blocks':'off',
    'space-before-function-paren':'off',
    'semi':'off',
    'no-unused-vars':'off',
    'block-spacing':'off',
    'brace-style':'off',
    'arrow-spacing':'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
