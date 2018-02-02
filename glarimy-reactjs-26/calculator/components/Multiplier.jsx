import "../styles/glarimy.css";
import React from "react";

class Multiplier extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
		let product = parseInt(this.props.first) * parseInt(this.props.second);
        return(
            <div>Product = {product}</div>
        );
    }
};

export default Multiplier;