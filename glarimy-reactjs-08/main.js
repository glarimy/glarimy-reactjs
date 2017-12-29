import "./glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStore} from "redux";

function fetchBooksFromServer() {
    return fetch('books.json').then(function(response){
            return response.json();
        }).then(function(books){
            dispatch({
                type: 'fetched_books',
                books: books
            });
        });
};

function addBookToServer(book){
    return fetch('/book',{
            method: 'post',
            data: book
        }).then(function(response){
            dispatch({
                type: 'added_book',
                book: book
            });
        });
}

function removeBookFromServer(isbn){
    return fetch(`/book/${isbn}`,{
            method: 'delete'
        }).then(function(response){
            dispatch({
                type: 'removed_book',
                isbn: isbn
            });
        });
}

const store = createStore(booksReducer);
const { getState, dispatch } = store;

function booksReducer(state={books:[]}, action){
    switch(action.type){
        case 'added_book':
            let books = [...state.books, action.book];
            return {
                books: books
            };
        case 'removed_book':
            books = state.books.filter(function(b){
                return b.isbn != action.isbn
            });
            return {
                books: books
            };
        case 'fetched_books':
            return action.books;
        default:
            return {
                books: []
            };
    }  
};

class Book extends React.Component{
    constructor(props){
        super(props);
        this.removeBook = this.removeBook.bind(this);
    }

    removeBook(){
        removeBookFromServer(this.props.isbn);
    }

    render(){
        return(
            <tr>
                <td>{ this.props.isbn }</td>
                <td>{ this.props.title }</td>
                <td>{ this.props.author }</td>
                <td><button onClick={this.removeBook}>Delete</button></td>
            </tr>
        );
    }
};

class Books extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <table>
                <tbody>
                    <tr><th>ISBN</th><th>Title</th><th>Author</th></tr>
                    { 
                        this.props.store.getState().books.map(book => (
                            <Book title={ book.title } key={book.isbn} isbn={book.isbn} author={book.author}>
                            </Book>
                        )) 
                    }
                </tbody>
            </table>
        );
    }
};

class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isbn: "",
            title: "",
            author: ""
        }
        
        this.changeISBN = this.changeISBN.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    changeISBN(e){
        this.setState({
            isbn: e.target.value
        });
    }

    changeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    changeAuthor(e){
         this.setState({
            author: e.target.value
        });
    }

    addBook(e){
        e.preventDefault();
        addBookToServer(this.state);
        this.props.history.push('/list');
    }

    render(){
        return (
            <form onSubmit={this.addBook} >
                <h2>Add New Book</h2>
                ISBN <input name="isbn" placeholder="ISBN Number" defaultValue={ this.state.isbn }
                   onChange={this.changeISBN} 
                />
                Title <input name="title" placeholder="Book Title" defaultValue={ this.state.title }
                   onChange={this.changeTitle} 
                />
                Author <input name="author" placeholder="Author Name" defaultValue={this.state.author} 
                    onChange={this.changeAuthor}
                />
                <button>Add</button>
            </form>
        );
    }
};

class Home extends React.Component{
    render(){
        return(
            <div>
                Welcome to Glarimy Library!
            </div>
        );
    }
};

class Library extends React.Component{
	constructor(props){
		super(props);

        store.subscribe( () => this.forceUpdate() );
        fetchBooksFromServer();
    }

	render(){
        return (
            <Router>
            <div>
                <h1>Glarimy Library</h1>
                <Link to="/">Home</Link> | <Link to="/add">Add Book</Link> | <Link to="/list">List Books</Link>
                <hr/>
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

ReactDOM.render(<Library />, document.getElementById('library'));