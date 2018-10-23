import React from "react";
import store from "./store"

class Score extends React.Component{
    constructor(props){
        super(props);
        store.subscribe(()=> this.forceUpdate());
    }
    render(){
        return( 
            <div>
                <div style={store.getState().scoreDisplay}>
                <h2>Score Card</h2>
                {store.getState().score} out of {store.getState().questions.length}
                </div>
            </div>
        )
    };
}

export default Score;