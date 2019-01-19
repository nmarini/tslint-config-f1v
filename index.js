module.exports = {
  extends: [
    'tslint-microsoft-contrib',
  ],
  rulesDirectory: [
    'node_modules/tslint-eslint-rules/dist/rules',
    'node_modules/tslint-microsoft-contrib',
    'tslint-consistent-codestyle',
  ],
  rules: {
    'import-name': false,
    'member-access': false,
    'no-as-type-assertion': true,
    'no-collapsible-if': true,
    'no-console': true,
    'no-default-export': false,
    'no-increment-decrement': false,
    'no-return-undefined': true,
    'no-static-this': true,
    'no-submodule-imports': false,
    'no-unnecessary-else': true,
    'no-unused': true,
    'parameter-properties': [ 'readonly' ],
    'trailing-comma': true,
    'triple-equals': true,
    'underscore-consistent-invocation': [ true, { style: 'static' } ],
  },
};
