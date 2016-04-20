var USER_DATA = {
	image: "https://avatars0.githubusercontent.com/johnptmcdonald",
	name: "john mcdonald",
	username: "johnptmcdonald"
}

var React = require('react')
var ReactDOM = require('react-dom')

var ProfilePic = React.createClass({
	render: function(){
		return(
			<div>
				<img src={this.props.image} style={{height:100, width: 100}}/>
			</div>
		)
	}
})

var ProfileLink = React.createClass({
	render: function(){
		return(
			<div>
				<a href={this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
})

var ProfileName = React.createClass({
	render: function(){
		return(
			<div>
				{this.props.name}
			</div>
		)
	}
})

var Avatar = React.createClass({
	render: function(){
		return(
			<div>
				<ProfileName name={this.props.user.name}/>
				<ProfilePic image={this.props.user.image}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
})

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById("app"))


