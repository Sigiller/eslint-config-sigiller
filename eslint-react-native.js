module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "pragma": "React"
        }
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/forbid-component-props": "off",
        "no-use-before-define": "off",
        "react/prefer-stateless-function": "off",
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2,
    }
};