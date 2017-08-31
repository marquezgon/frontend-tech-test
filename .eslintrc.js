module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "parser": "babel-eslint",
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./webpack.config.js",
            },
        },
    },
};
