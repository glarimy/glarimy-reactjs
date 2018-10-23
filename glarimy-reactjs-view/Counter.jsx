import "./glarimy.css";
import React from "react";
import store from "./store";

class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Number Books: {store.getState().countReducer.count}</div>
        );
    }
};

export default Counter;