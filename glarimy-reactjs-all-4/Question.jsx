import React from "react";

class Question extends React.Component{
    constructor(props){
        super(props);
        this.notify = (e) => {
            this.props.cb(e.target.name, e.target.value);
        }
    }
    render(){ 
        return(
            <div>
            <p>{ this.props.question.description }</p>
            <input type='radio' name={this.props.question.id} value="a" onChange={this.notify}/>
            {this.props.question.a}<br/>
            <input type='radio' name={this.props.question.id} value="b" onChange={this.notify}/>
            {this.props.question.b}<br/>
            <input type='radio' name={this.props.question.id} value="c" onChange={this.notify}/>
            {this.props.question.c}<br/>
            <input type='radio' name={this.props.question.id} value="d" onChange={this.notify}/>
            {this.props.question.d}<br/>
            </div>
        ) 
    }
};

export default Question;