module.exports = {
    extends: ["eslint:recommended", "prettier"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false,
    },
    env: {
        node: true,
    },
    rules: {
        "no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
    },
};
