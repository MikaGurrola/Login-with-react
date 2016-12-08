import React from 'react';
import Form from './Form';
import base from '../base';

class App extends React.Component{
	constructor(){
		super();
		// get initial state
		this.state = {
			users: {}
		};
	}

	componentDidMount(){
		base.syncState(`users`, {
			context: this,
			state: 'users',
			asArray: false,
			then(data){
				console.log(data);
				return data;
			}
		});
	}

	render(){
		return (
			<div>
				<h1>Hi</h1>
				<Form />
			</div>
		)
	}
}

export default App;