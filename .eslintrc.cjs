module.exports={
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parser:'vue-eslint-parser',
    parseOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
      plugins: [],
      rules: {},
}
