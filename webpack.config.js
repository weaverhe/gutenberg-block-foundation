var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

var extractEditorStyles = new ExtractText({
    filename: './blocks.editor.build.css'
});

var extractBlockStyles = new ExtractText({
    filename: './blocks.style.build.css'
});

var plugins = [ extractEditorStyles, extractBlockStyles ];

var stylusConfig = {
    use: [
        {
            loader: 'css-loader',
        },
        {
            loader: 'stylus-loader'
        }
    ]
};

module.exports = {
    entry: './blocks/src/blocks.js',
    output: {
        filename: 'blocks.build.js',
        path: path.resolve(__dirname, 'blocks/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /style\.styl$/,
                exclude: /node_modules/,
                use: extractBlockStyles.extract(stylusConfig)
            },
            {
                test: /editor\.styl$/,
                exclude: /node_modules/,
                use: extractEditorStyles.extract(stylusConfig)
            }
        ],
    },
    plugins: plugins
}