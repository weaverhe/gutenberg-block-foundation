var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');
var tinyPng = require('tinypng-webpack-plugin');

var extractEditorStyles = new ExtractText({
    filename: './blocks.editor.build.css'
});

var extractBlockStyles = new ExtractText({
    filename: './blocks.style.build.css'
});

var imageOptimizer = new tinyPng({
	key: "YOUR_API_KEY_HERE"
});

var plugins = [ extractEditorStyles, extractBlockStyles, imageOptimizer ];

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
    entry: './blocks/src/index.js',
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
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
        ],
    },
    plugins: plugins
}