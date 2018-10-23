import React from 'react';
import Question from './Question.jsx';

class QuestionPaper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            option: "",
            details: {
                description : "What is capital of India?",
                optionA: "New Delhi",
                optionB: "Chennai",
                optionC: "Mysore",
                optionD: "Mumbai"
            }
        }
        this.onOptionChanged = this.onOptionChanged.bind(this);
    }
    onOptionChanged(option) {
        this.setState({
            option: option
        });
    }
    render(){
        return(
            <div>
                <Question details={this.state.details} callback={this.onOptionChanged}/><hr/>
                You have selected {this.state.option}
            </div>
        );
    }
}

export default QuestionPaper;