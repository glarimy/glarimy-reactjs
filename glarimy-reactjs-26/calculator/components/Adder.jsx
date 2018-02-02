import "../styles/glarimy.css";
import React from "react";

class Adder extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let sum = parseInt(this.props.first) + parseInt(this.props.second);
        return(
            <div>Sum = {sum}</div>
        );
    }
};

export default Adder;