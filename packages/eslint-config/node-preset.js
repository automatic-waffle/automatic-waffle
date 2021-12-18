module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
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
