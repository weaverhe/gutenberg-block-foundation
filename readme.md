# Gutenberg Block Starter Files

This is a very simple set of files to get up and running with Gutenberg blocks. It has a simple webpack file to build, lint, and babel-ify javascript. It also compiles Stylus files, and then enqueues everything in a really basic plugin.

To use, just download the files and put it into the plugins directory. Then:

1. `cd` to the plugin directory in terminal
2. run `npm install` or `yarn install` depending on your preference
3. run `npm run develop` or `yarn develop` to watch files while developing

If you want to use image optimization, you'll need to provide a [tinyPNG API key](https://tinypng.com/developers) in the webpack config file. Once you have the key, add it to `webpack.config.js`:

```javascript
var imageOptimizer = new tinyPng({
	key: "YOUR_API_KEY_HERE"
);
```