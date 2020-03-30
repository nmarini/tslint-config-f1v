module.exports = {
  "extends": [
      require.resolve("../index"),
      "eslint:recommended",
      "plugin:react/recommended",
    ],
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "tsconfig.json",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off"
  }
};