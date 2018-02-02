import "../styles/glarimy.css";
import React from "react";
import store from "../store/store.js";

class Adder extends React.Component{
    constructor(props){
        super(props);
        store.subscribe( () => this.forceUpdate() );
	}

    render(){
        let sum = parseInt(store.getState().first) + parseInt(store.getState().second);
        return(
            <div>Sum = {sum}</div>
        );
    }
};

export default Adder;