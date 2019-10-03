module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": "off",
    "linebreak-style":"off",
    "no-console":"off",
    "camelcase":"off",
    "import/no-named-as-default":"off",
    "import/no-named-as-default-member":"off",
    "consistent-return":"off",
    "prefer-const":"off",
    "no-param-reassign":"off",
    "no-restricted-globals":"off"
  },
};
