var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: './app.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	},
	plugins: [
		new LiveReloadPlugin()
	],
	devtool: 'source-map'
}
