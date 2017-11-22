const path = require('path');
const webpack = require('webpack');
module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js',
		a: './a.js',
		b: './b.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
						loader: 'babel-loader'
					}]
			},
			{
			test: /\.css$/,
			use: [
					'style-loader', {
						loader: 'css-loader', //这样的配置，让其支持css模块化(css modules)
						options: {
							modules: true
						}
					}
				]
			},
			{
			test: /\.(sass|scss)$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}]
			},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'] //css模块，先从src目录里面找，在从node_module里面找
    },
    plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2, //有任意模块加载了两次或更多,这里2就是设置超过2次以上使用
        })
	]
};