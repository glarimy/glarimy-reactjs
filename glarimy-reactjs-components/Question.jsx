import React from 'react';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.onOptionSelect = this.onOptionSelect.bind(this);
    }
    onOptionSelect(e) {
        this.props.callback(e.target.value);
    }
    render(){
        return(
            <div>
                <p>{this.props.details.description}</p>
                <div>
                    <input type='radio' name='option' value='A' onChange={this.onOptionSelect}/>{this.props.details.optionA}<br/>
                    <input type='radio' name='option' value='B' onChange={this.onOptionSelect}/>{this.props.details.optionB}<br/>
                    <input type='radio' name='option' value='C' onChange={this.onOptionSelect}/>{this.props.details.optionC}<br/>
                    <input type='radio' name='option' value='D' onChange={this.onOptionSelect}/>{this.props.details.optionD}<br/>
                </div>
            </div>
        );
    }
}

export default Question;