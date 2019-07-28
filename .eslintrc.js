const prettierConfig = require('./.prettierrc.json');

module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(require.resolve),
  plugins: ['prettier'],
  rules: {
    'func-names': [1, 'as-needed'],
    'prettier/prettier': ['warn', prettierConfig],
  },
  env: {
    es6: true,
  },
};
