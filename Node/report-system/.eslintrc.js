module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    plugins: ['prettier'],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        'prettier/prettier': 0,
        'indent': ['warn', 2],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [{
        files: [
            "**/__tests__/*.{j,t}s?(x)",
            "**/tests/unit/**/*.spec.{j,t}s?(x)"
        ],
        env: {
            jest: true
        }
    }]
};