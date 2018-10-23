import React from "react";
import SearchForm from "./SearchForm.jsx";
import Quiz from "./Quiz.jsx";
import Score from "./Score.jsx";
import store from "./store.js";

class GK extends React.Component{
	constructor(props){
		super(props);
        store.subscribe( () => this.forceUpdate() );
    }

	render(){
        return (
            <div>
                <h1>Glarimy General Knowledge</h1>
                <hr/>
                <SearchForm/>
                <Quiz/>
                <Score/>
            </div>
        );
	}
};

export default GK;