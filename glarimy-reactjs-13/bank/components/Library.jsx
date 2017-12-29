import "../styles/glarimy.css";
import React from "react";
import Home from "./home.jsx";
import AddForm from "./AddForm.jsx";
import Books from "./Books.jsx";
import Counter from "./Counter.jsx";
import store from "../store/store.js";
import {fetchBooksFromServer} from "../actions/actions.js";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Library extends React.Component{
	constructor(props){
		super(props);

        store.subscribe( () => this.forceUpdate() );
        store.dispatch(fetchBooksFromServer());
    }

	render(){
        return (
            <Router>
            <div>
                <h1>Glarimy Library</h1>
                <Link to="/">Home</Link> | <Link to="/add">Add Book</Link> | <Link to="/list">List Books</Link>
                <hr/>
                <Counter/>
                <Route exact path="/" component={Home}/>
                <Route path="/add" component={AddForm}/>
                <Route path='/list' render={(props) => (
                    <Books {...props} store={store}/>
                )}/>
            </div>
            </Router>
        );
	}
};

export default Library;