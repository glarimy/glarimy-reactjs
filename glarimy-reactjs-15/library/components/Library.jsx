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
                <Link to="/library/">Home</Link> | <Link to="/library/add">Add Book</Link> | <Link to="/library/list">List Books</Link>
                <hr/>
                <Counter/>
                <Route exact path="/library/" component={Home}/>
                <Route path="/library/add" component={AddForm}/>
                <Route path='/library/list' render={(props) => (
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