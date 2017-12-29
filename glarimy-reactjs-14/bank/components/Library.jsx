import "../styles/glarimy.css";
import React from "react";
import Home from "./home.jsx";
import AddForm from "./AddForm.jsx";
import Books from "./Books.jsx";
import Counter from "./Counter.jsx";
import {fetchBooksFromServer} from "../actions/actions.js";
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Library extends React.Component{
	constructor(props){
		super(props);
    }

    componentDidMount() {
        this.props.fetchBooks();
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
                    <Books {...props} books={this.props.books}/>
                )}/>
            </div>
            </Router>
        );
	}
};

const mapStateToProps = (state) => {
    return {
        books: state.bookReducer.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooksFromServer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);