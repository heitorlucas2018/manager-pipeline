module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    "rules": {
        "import/no-anonymous-default-export": ["error", {
            "allowArray": false,
            "allowArrowFunction": false,
            "allowAnonymousClass": false,
            "allowAnonymousFunction": false,
            "allowCallExpression": false, // The true value here is for backward compatibility
            "allowNew": false,
            "allowLiteral": false,
            "allowObject": false
        }]
    },
}
