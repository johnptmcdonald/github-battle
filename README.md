# github-battle

##1-react-with-webpack-starter
Did an npm init and installed my dependencies:

```
npm install --save react react-dom

npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react
```

Then configured webpack:

```
webpack.config.js

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})


module.exports = {
	entry: [
		'./app/app.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "app_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}

```

...and babel too:

```
.babelrc

{
	"presets": [
		"react"
	]
}
```

I also chucked the bootstrap CDN into my dev index.html : ```<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">```


##2-props-and-nesting-components

You should treat props being passed to children as immutable. 


