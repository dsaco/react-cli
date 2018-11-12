const dep = {
    "devDependencies": {
        "@babel/core": "^7.1.5",
        "@babel/plugin-proposal-class-properties": "^7.1.0",
        "@babel/plugin-proposal-decorators": "^7.1.2",
        "@babel/plugin-syntax-dynamic-import": "^7.0.0",
        "@babel/plugin-transform-runtime": "^7.1.0",
        "@babel/preset-env": "^7.1.5",
        "@babel/preset-react": "^7.0.0",
        "@babel/runtime": "^7.1.5",
        "autoprefixer": "^9.3.1",
        "babel-loader": "^8.0.4",
        "css-loader": "^1.0.1",
        "html-webpack-plugin": "^3.2.0",
        "mini-css-extract-plugin": "^0.4.4",
        "node-sass": "^4.10.0",
        "optimize-css-assets-webpack-plugin": "^5.0.1",
        "postcss-loader": "^3.0.0",
        "sass-loader": "^7.1.0",
        "style-loader": "^0.23.1",
        "uglifyjs-webpack-plugin": "^2.0.1",
        "webpack": "^4.25.1",
        "webpack-cli": "^3.1.2",
        "webpack-dev-server": "^3.1.10",
        "webpack-merge": "^4.1.4"
    },
    "dependencies": {
        "react": "^16.6.1",
        "react-dom": "^16.6.1",
        "react-hot-loader": "^4.3.12",
        "react-router-dom": "^4.3.1"
    }
}

const eslintDep = {
    "eslint": "^5.5.0",
    "eslint-config-dsaco": "^1.0.1",
    "eslint-loader": "^2.1.0",
    "eslint-plugin-react": "^7.11.1",
}


module.exports = {
    dep,
    eslintDep,
}