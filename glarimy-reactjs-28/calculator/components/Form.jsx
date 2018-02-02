import "../styles/glarimy.css";
import React from "react";
import store from "../store/store.js";
import {newData} from "../actions/actions.js";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first: 0,
            second: 0
        }

        this.changeFirst = this.changeFirst.bind(this);
        this.changeSecond = this.changeSecond.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeFirst(e){
        this.setState({first: e.target.value});
    }

    changeSecond(e){
        this.setState({second: e.target.value})
    }

    handleClick(e){
        let ret = store.dispatch(newData(this.state.first, this.state.second));
        if(ret == 'invalid'){
            this.setState({
                first: 0,
                second: 0
            });
        }
    }

    render(){
        return (
            <div>
                Enter  Numbers
                <input name="first" defaultValue={ this.state.first } value={this.state.first} onChange={this.changeFirst} 
                />
                <input name="second" defaultValue={ this.state.second } value={this.state.second}
                   onChange={this.changeSecond} 
                />
                <button onClick={this.handleClick}>Go!</button>
            </div>
        );
    }
};

export default Form;