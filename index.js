module.exports = {
    "root": true,
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "parserOptions": {
        "ecmaVersion": 6
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/index.js"
            }
        }
    },
    "rules": {
        "arrow-parens": [2, "as-needed"],
            "indent": [2, 4, {"SwitchCase": 1}],
            "comma-dangle": [2, "never"],
            "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true,
                "ImportDeclaration": true
            }
        }],
            "space-before-function-paren": [2, "never"],
            "space-unary-ops": [1, { "words": true, "nonwords": false }],
            "func-names": 0,
            "max-len": 0,
            "no-with": 2,
            "no-bitwise": 0,
            "no-multiple-empty-lines": [2, {"max": 1}],
            "one-var": [2, "never"],
            "brace-style": [2, "1tbs", {"allowSingleLine": false}],
            "curly": 2,
            "lines-around-comment": [2, { "beforeBlockComment": true, "beforeLineComment": true, "allowBlockStart": true }],
            "linebreak-style": 2,
            "new-cap": [2, {
            "newIsCap": true,
            "capIsNewExceptions": []
        }]
    },
    "ecmaFeatures": {
        "modules": true
    }
};
