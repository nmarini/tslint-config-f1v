module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "tsconfig.json",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "@typescript-eslint/tslint"
  ],
  "rules": {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/class-name-casing": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/explicit-member-accessibility": [
          "off",
          {
              "accessibility": "explicit"
          }
      ],
      "@typescript-eslint/indent": [
          "error",
          4,
          {
              "CallExpression": {
                  "arguments": "first"
              },
              "FunctionDeclaration": {
                  "parameters": "first"
              },
              "FunctionExpression": {
                  "parameters": "first"
              }
          }
      ],
      "@typescript-eslint/interface-name-prefix": "error",
      "@typescript-eslint/member-delimiter-style": [
          "error",
          {
              "multiline": {
                  "delimiter": "semi",
                  "requireLast": true
              },
              "singleline": {
                  "delimiter": "semi",
                  "requireLast": false
              }
          }
      ],
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-param-reassign": "error",
      "@typescript-eslint/no-parameter-properties": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/quotes": [
          "error",
          "single"
      ],
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/semi": [
          "error",
          "always"
      ],
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/unified-signatures": "error",
      "arrow-parens": [
          "off",
          "as-needed"
      ],
      "camelcase": "error",
      "comma-dangle": "error",
      "complexity": "error",
      "constructor-super": "error",
      "curly": "error",
      "default-case": "error",
      "dot-notation": "error",
      "eol-last": "error",
      "eqeqeq": [
          "error",
          "always"
      ],
      "guard-for-in": "error",
      "id-blacklist": "error",
      "id-match": "error",
      "import/no-default-export": "off",
      "import/no-deprecated": "off",
      "import/no-extraneous-dependencies": "error",
      "import/no-internal-modules": "off",
      "import/no-unassigned-import": "error",
      "import/order": "error",
      "jsdoc/no-types": "error",
      "linebreak-style": "error",
      "max-classes-per-file": [
          "error",
          3
      ],
      "max-len": [
          "error",
          {
              "code": 140
          }
      ],
      "max-lines": "error",
      "new-parens": "error",
      "newline-per-chained-call": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-eval": "error",
      "no-extra-semi": "error",
      "no-fallthrough": "off",
      "no-invalid-regexp": "error",
      "no-invalid-this": "error",
      "no-irregular-whitespace": "error",
      "no-magic-numbers": "off",
      "no-multi-str": "off",
      "no-multiple-empty-lines": "error",
      "no-new-wrappers": "error",
      "no-null/no-null": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-restricted-imports": "off",
      "no-restricted-syntax": [
          "error",
          "ForInStatement"
      ],
      "no-return-await": "error",
      "no-sequences": "error",
      "no-shadow": [
          "error",
          {
              "hoist": "all"
          }
      ],
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "error",
      "no-unsafe-finally": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": "off",
      "one-var": [
          "error",
          "never"
      ],
      "padding-line-between-statements": [
          "error",
          {
              "blankLine": "always",
              "prev": "*",
              "next": "return"
          }
      ],
      "prefer-arrow/prefer-arrow-functions": "off",
      "prefer-const": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      "quote-props": [
          "error",
          "as-needed"
      ],
      "radix": "error",
      "space-before-function-paren": "off",
      "space-in-parens": [
          "error",
          "never"
      ],
      "spaced-comment": [
          "error",
          "never"
      ],
      "unicorn/filename-case": "error",
      "use-isnan": "error",
      "valid-typeof": "off",
      "yoda": "error",
      "@typescript-eslint/tslint/config": [
          "error",
          {
              "rules": {
                  "chai-prefer-contains-to-index-of": true,
                  "chai-vague-errors": true,
                  "completed-docs": [
                      true,
                      "classes"
                  ],
                  "encoding": true,
                  "export-name": true,
                  "function-name": true,
                  "import-spacing": true,
                  "informative-docs": true,
                  "insecure-random": true,
                  "jquery-deferred-must-complete": true,
                  "jsdoc-format": true,
                  "match-default-export-name": true,
                  "max-func-body-length": [
                      true,
                      100,
                      {
                          "ignore-parameters-to-function-regex": "^describe$"
                      }
                  ],
                  "mocha-avoid-only": true,
                  "mocha-no-side-effect-code": true,
                  "mocha-unneeded-done": true,
                  "no-as-type-assertion": true,
                  "no-backbone-get-set-outside-model": true,
                  "no-collapsible-if": true,
                  "no-cookies": true,
                  "no-delete-expression": true,
                  "no-disable-auto-sanitization": true,
                  "no-document-domain": true,
                  "no-document-write": true,
                  "no-dynamic-delete": true,
                  "no-exec-script": true,
                  "no-function-constructor-with-string-args": true,
                  "no-function-expression": true,
                  "no-http-string": [
                      true,
                      "http://www.example.com/?.*",
                      "http://localhost:?.*"
                  ],
                  "no-inner-html": true,
                  "no-jquery-raw-elements": true,
                  "no-reference-import": true,
                  "no-relative-imports": true,
                  "no-reserved-keywords": true,
                  "no-return-undefined": true,
                  "no-single-line-block-comment": true,
                  "no-static-this": true,
                  "no-string-based-set-immediate": true,
                  "no-string-based-set-interval": true,
                  "no-string-based-set-timeout": true,
                  "no-suspicious-comment": true,
                  "no-typeof-undefined": true,
                  "no-unnecessary-bind": true,
                  "no-unnecessary-callback-wrapper": true,
                  "no-unnecessary-else": true,
                  "no-unnecessary-field-initialization": true,
                  "no-unnecessary-local-variable": true,
                  "no-unnecessary-override": true,
                  "no-unsafe-any": true,
                  "no-unsupported-browser-code": true,
                  "no-unused": true,
                  "no-useless-files": true,
                  "no-with-statement": true,
                  "non-literal-fs-path": true,
                  "non-literal-require": true,
                  "number-literal-format": true,
                  "one-line": [
                      true,
                      "check-open-brace",
                      "check-catch",
                      "check-else",
                      "check-whitespace"
                  ],
                  "possible-timing-attack": true,
                  "prefer-array-literal": true,
                  "prefer-method-signature": true,
                  "prefer-type-cast": true,
                  "prefer-while": true,
                  "promise-must-complete": true,
                  "react-a11y-anchors": true,
                  "react-a11y-aria-unsupported-elements": true,
                  "react-a11y-event-has-role": true,
                  "react-a11y-image-button-has-alt": true,
                  "react-a11y-img-has-alt": true,
                  "react-a11y-input-elements": true,
                  "react-a11y-lang": true,
                  "react-a11y-meta": true,
                  "react-a11y-no-onchange": true,
                  "react-a11y-props": true,
                  "react-a11y-proptypes": true,
                  "react-a11y-required": true,
                  "react-a11y-role": true,
                  "react-a11y-role-has-required-aria-props": true,
                  "react-a11y-role-supports-aria-props": true,
                  "react-a11y-tabindex-no-positive": true,
                  "react-a11y-titles": true,
                  "react-anchor-blank-noopener": true,
                  "react-iframe-missing-sandbox": true,
                  "react-no-dangerous-html": true,
                  "react-this-binding-issue": true,
                  "react-unused-props-and-state": true,
                  "switch-final-break": true,
                  "typedef": [
                      true,
                      "call-signature",
                      "arrow-call-signature",
                      "parameter",
                      "arrow-parameter",
                      "property-declaration",
                      "variable-declaration",
                      "member-variable-declaration"
                  ],
                  "underscore-consistent-invocation": [
                      true,
                      {
                          "style": "static"
                      }
                  ],
                  "use-named-parameter": true,
                  "use-simple-attributes": true,
                  "whitespace": [
                      true,
                      "check-branch",
                      "check-decl",
                      "check-operator",
                      "check-separator",
                      "check-type"
                  ]
              }
          }
      ]
  }
};
