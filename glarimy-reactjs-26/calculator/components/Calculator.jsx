import "../styles/glarimy.css";
import React from "react";
import Adder from "./Adder.jsx";
import Multiplier from "./Multiplier.jsx";
import Form from "./Form.jsx";


class Calculator extends React.Component{
	constructor(props){
		super(props);
        this.state = {
            first: 0,
            second: 0
        }
        this.process = this.process.bind(this);
    }

    process(f, s){
        this.setState({
            first: f,
            second: s
        });
    }

	render(){
        return (
            <div>
                <Form onGo={this.process}/>
                <Adder first={this.state.first} second={this.state.second}/>
                <Multiplier first={this.state.first} second={this.state.second}/>
            </div>
        );
	}
};

export default Calculator;