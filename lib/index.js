module.exports = {
    rules: {
      'no-to-js-or-to-array': require('./rules/no-to-js-or-to-array')
    },
    configs: {
      recommended: {
        rules: {
          'no-to-js-or-to-array/no-to-js-or-to-array': 'error'
        }
      }
    }
  };
  