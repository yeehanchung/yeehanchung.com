module.exports = {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:react-hooks/recommended",
    ],
    parser:        "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType:  "module",
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "brace-style": "error",
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon":  true,
                "align":       "value"
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after":  true
            }
        ],

        /**
         * ARRAY
         */
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],

        /**
         * OBJECT
         */
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-curly-newline": [
            "error",
            {
                "ObjectPattern": {
                    "minProperties": 4
                },
                "ImportDeclaration": {
                    "minProperties": 3
                }
            }
        ],

        /**
         * COMMENT
         */
        "lines-around-comment": [
            "error",
            {
                "afterBlockComment":  false,
                "afterLineComment":   false,
                "beforeBlockComment": true,
                "beforeLineComment":  true
            }
        ],
        "eol-last": [ "error", "always" ],
    },
};
