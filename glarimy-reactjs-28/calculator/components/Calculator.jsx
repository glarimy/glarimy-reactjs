import "../styles/glarimy.css";
import React from "react";
import Adder from "./Adder.jsx";
import Multiplier from "./Multiplier.jsx";
import Form from "./Form.jsx";


class Calculator extends React.Component{
    render(){
        return (
            <div>
                <Form/>
                <Adder/>
                <Multiplier/>
            </div>
        );
	}
};

export default Calculator;