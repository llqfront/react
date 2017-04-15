define(function(require, exports, module) {
	var React = require('react')
	var ReactDOM = require('react-dom');
	// var AppComponent = require('../components/productBox.jsx');
  	var P = {
		_init:function(){
			P.render_1();
			P.render_2();
			P.render_3();
			// 组件
			P.render_4();
			// 组件状态
			P.render_5();
			P.render_6();
			P.render_7();
		},
		render_1:function(){
			ReactDOM.render(
				<h1>sadfasf</h1>,
				document.getElementById('app')
			);
		},
		render_2:function(){
			var names = ['Jack','Tom','Alice'];
			ReactDOM.render(
				<div>
				{
				names.map(function(value,index){
					return <div>hello,{value}</div>
				})
				}
				</div>,
				document.getElementById('app1')
			);
		},
		render_3:function(){
			var arr = [
				<h1>hellow word</h1>,
				<h2>React is perfect</h2>
			];
			ReactDOM.render(
				<div>
				{
					arr
				}
				</div>,
				document.getElementById('app2')
			);
		},
		render_4:function(){
			// 可以直接定义组件然后引用
			// ReactDOM.render(
			// 	<AppComponent name="Jack" />, 
			// 	document.getElementById('app3')
			// );
			// 以下一种方式
			var Greet = React.createClass({
				render:function(){
					return (
						<h1>hello,{this.props.name}</h1>
					);
				}
			})
			ReactDOM.render(
				<Greet name="Jack" />,
				document.getElementById('app3')
			);
		},
		render_5:function(){
			var InputState = React.createClass({
				getInitialState:function() {
					return {enable:false};
				},
				handleClick:function(event){
					this.setState({enable:!this.state.enable})
				},
				render:function(){
					return(
						<p>
							<input type="text" disabled={this.state.enable} />
							<input type="button" onClick={this.handleClick} value="change state"/>
						</p>
					)
				}
			})
			ReactDOM.render(
				<InputState />,
				document.getElementById('app4')
			);
		},
		render_6:function(){
			var Hello = React.createClass({
				getInitialState:function(){
					return {
						opacity:1.0
					}
				},
				componentDidMount:function() {
					this.timer = setInterval(function(){
						var opacity = this.state.opacity;
						opacity-=.05;
						if(opacity<0.1){
							opacity = 1.0;
						}
						this.setState({
							opacity:opacity
						})
					}.bind(this),100)
				},
				render:function(){
					return(
						<div style={{opacity:this.state.opacity}}>
							hello,{this.props.name}
						</div>
					)
				}
			})
			ReactDOM.render(
				<Hello name="Jack"/>,
				document.getElementById('app5')
			);
		},
		render_7:function(){
			var Search = React.createClass({
				render:function(){
					return (
						<div>
							{this.props.searchType}:<input type="text"/>
							<input type="button" value="Search"/>
						</div>
					)
				}
			})
			var Page = React.createClass({
				render:function(){
					return (
						<div>
							<h1>Welcome</h1>
							<Search searchType="Title"/>
							<Search searchType="Content"/>
						</div>
					)
				}
			})
			ReactDOM.render(
				<Page/>,
				document.getElementById('app6')
			);
		}
	}
	module.exports = {
		init:P._init
	}
})