/**
|--------------------------------------------------
| Vue.js config
|--------------------------------------------------
**/

// inherit js rules
const js = require.resolve('./javascript')
const config = require('./config-variables')

module.exports = {
  extends: ['plugin:vue/vue3-strongly-recommended', js],
  rules: {
    /* Naming rules*/
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: ['stroke-dasharray', 'stroke-width'],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false, ignores: ['i18n'] },
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-reserved-component-names': ['error'],

    /* Component rules */
    'vue/require-default-prop': 0,
    'vue/require-name-property': ['error'],
    'vue/require-prop-types': ['error'],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'setup'],
      },
    ],
    'vue/no-unused-refs': 'error',
    'vue/no-potential-component-option-typo': ['warn'],

    /* Order rules */
    'vue/order-in-components': ['error'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'CONDITIONALS',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS',
        ],
        alphabetical: false,
      },
    ],

    /* Template rules */
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/this-in-template': ['error', 'never'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],

    // NOTE: can't be used with Vue 2.x, conflicts with no-v-for-template-key rule
    'vue/no-v-for-template-key-on-child': 0,
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-template-shadow': 'error',
    'vue/max-len': [
      'warn',
      {
        code: config.printWidth,
        template: config.printWidth,
        tabWidth: config.indent,
        comments: config.commentWidth,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    // Disabled completely, as this is colliding with Prettier
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 4,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true
    //     }
    //   }
    // ]
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
      },
    ],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    // Enforce not to destruct refs to avoid loosing reactivity
    'vue/no-ref-object-destructure': 'error',
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    // NOTE: Disabled for now, has potential but not optimal for everyone
    // 'vue/no-undef-properties': 'error',
    // To Enforce Composition API
    // 'vue/component-api-style': ['error', ['script-setup', 'composition', 'composition-vue2']],
  },
}
