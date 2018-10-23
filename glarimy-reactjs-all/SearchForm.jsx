import React from "react";
import {fetchQuizFromServer} from "./rest.js";

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subject: "ReactJS"
        }
        
        this.changeSubject = (e) => {this.setState({
            subject: e.target.value
        })};

        this.fetchQuiz = (e) => {
            e.preventDefault();
            fetchQuizFromServer(this.state.subject);
        }
    }


    render(){
        return (
            <form onSubmit={this.fetchQuiz} >
                <h2>Challenge Yourself</h2>
                Subject <input placeholder="select subject" defaultValue={ this.state.subject }
                   onChange={this.changeSubject} 
                />
                <button>Search</button>
            </form>
        );
    }
};

export default SearchForm;