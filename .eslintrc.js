module.exports = {
    root: false,
    env: {
        node: true
    },
    /*extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],*/
    extends: ["airbnb-base"],

    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": ["error", {
            "endOfLine": "auto"
        }],
    }

};