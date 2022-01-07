module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    indent: ["error", 4],
    "linebreak-style": 0,
    "eol-last": ["error", "never"],
},
};
