import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	// constructor(){
	// 	super();
	// }
	goToStore(event) {
		event.preventDefault();
		console.log('you changed the url');
		
		//first grab the text form the box
		console.log(this.storeInput.value);
		const storeId = this.storeInput.value;
		// second we're going ot transition from / to /store/s:storeid
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render(){
		return(
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" 
					defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;