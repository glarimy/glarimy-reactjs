import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error: ''
		}
		this.handleBlur = (e)=>{
			if(this.isValid(e))
				this.props.cb(e.target.value);		
		}
		this.isValid = this.isValid.bind(this);
	}

	isValid(e){
		let value = e.target.value;

		if(this.props.required && value == null || value.trim().length == 0){
			e.target.setCustomValidity(`${this.props.name} is required`);
			this.setState({
				error: `${this.props.name} is required`
			})
			return false;
		}else{
			e.target.setCustomValidity('');
			this.setState({
				error: ''
			});
		}

		if(this.props.minLength != 0 || this.props.maxLength != 0){
			if(value.trim().length < this.props.minLength || value.trim().length > this.props.maxLength ){
				e.target.setCustomValidity(`The length of ${this.props.name} must be ${this.props.minLength} - ${this.props.maxLength} characters`);
				this.setState({
					error: `The length of ${this.props.name} must be ${this.props.minLength} - ${this.props.maxLength} characters`
				});
				return false;
			}else{
				e.target.setCustomValidity('');
				this.setState({
					error: ''
				});
			}
		}
		return true;
	}

	render(){
		return(
			<span>
				<input 
					defaultValue={this.props.value}
					onBlur={this.handleBlur}/>
				<label className='error'> {this.state.error}</label>
			</span>
		);
	}
}

TextInput.propTypes = {
	required: PropTypes.bool,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	cb: PropTypes.func.isRequired
}
TextInput.defaultProps = {
	required: false,
	minLength: 0,
	maxLength: 0
}

export default TextInput;