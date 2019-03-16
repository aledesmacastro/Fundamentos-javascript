module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-empty-function": 1,
        "semi-style": ["error", "last"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "no-plusplus": 1,
        "eqeqeq": "error"
    }
};