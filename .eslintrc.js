module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true,
        "jest": true
    },
    "parserOptions": { 
        "ecmaVersion": 6, 
        "sourceType": "module", 
        "ecmaFeatures": { 
            "jsx": true
        }
    },
    "plugins": ["vue"]
}