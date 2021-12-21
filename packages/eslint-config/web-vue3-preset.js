module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        "vue/setup-compiler-macros": true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
};
