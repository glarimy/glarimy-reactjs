import "../styles/glarimy.css";
import React from "react";
import store from "../store/store.js";

class Multiplier extends React.Component{
    constructor(props){
        super(props);
        store.subscribe( () => this.forceUpdate() );
	}

    render(){
        let product = parseInt(store.getState().first) * parseInt(store.getState().second);
        return(
            <div>Product = {product}</div>
        );
    }
};

export default Multiplier;