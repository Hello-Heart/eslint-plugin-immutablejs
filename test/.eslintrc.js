const eslintPluginExample = require("./eslint-plugin-example");

module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:no-to-js-or-to-array/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  };
  