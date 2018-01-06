import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput.jsx';

class NumberInput extends TextInput{
	constructor(props){
		super(props);

		this.isValid = (e)=>{
			if(super.isValid(e)){
				let value = e.target.value;
				if(this.props.integer){
					value = Number.parseInt(value);
				}else{
					value = Number.parseFloat(value);
				}
				if(this.props.min != undefined || this.props.max != undefined)
					if(value < this.props.min || value > this.props.max){
						e.target.setCustomValidity(`${this.props.name} must be between ${this.props.min} and ${this.props.max}`);
						this.setState({
							error: `${this.props.name} must be between ${this.props.min} and ${this.props.max}`
						})
						return false;
					}
				return true;
			}else{
				return false;
			}
		}
	}
}

NumberInput.propTypes = {
	required: PropTypes.bool,
	integer: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	cb: PropTypes.func.isRequired
}

NumberInput.defaultProps = {
	required: false,
	integer: true,
	min: undefined,
	max: undefined,
	minLength: 0,
	maxLength: 0
}

export default NumberInput;