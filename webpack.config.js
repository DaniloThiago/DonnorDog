const webpack = require('webpack') // referencia para o webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin') // importando plugin para o tratamento do css

module.exports = {
	entry: './ex/index.jsx', // ponto de entrada
	output: {
		path: __dirname + '/public', // arquivo de saida
		filename: './bundle.js' // nome do arquivo de saida
	},
	devServer: {
		port: 8080,
		contentBase: './public',
	},
	plugins: [
		new ExtractTextPlugin('app.css') // resultado após o tratamento do css irá gerar app.css
	],
	module: {
		loaders: [
			{
				test:/.jsx?$/, // teste para saber de é arquivo .jsx
				loader: 'babel-loader',
				exclude: '/node_modules', // excluindo a pasta do teste
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/, // teste para saber de é arquivo .css
				loader: ExtractTextPlugin.extract("style-loader", "css-loader") // tratado o import css
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	}
}