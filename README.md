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


##3-react-router

This is pretty cool: https://github.com/reactjs/react-router-tutorial

First you import a bunch of route stuff in your routes file:
```
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRouter = ReactRouter.IndexRoute
var browserHistory = ReactRouter.browserHistory // or hashHistory, because browserHistory requires some server side setup as explained here: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
```

The routes are nested like this:

```
var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<Route path='/home' component={Home}></Route>
		</Route>
	</Router>
)
```
The component is active whenever the url has its path. In this case, we render the Home element simply by writing ```{this.props.children}``` in the Main component. This renders the *active* children of Main. 

Actually, we're going to always render Home, if no other paths are active (it will be like the index within Main - Main will ALWAYS be rendered, home will be rendered if no other children of Main are rendered [we will be adding lots of children soon]):

```
var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<Indexroute component={Home}></Route>
		</Route>
	</Router>
)

