import "./glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
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

const store = createStore(booksReducer);
const { getState, dispatch } = store;

function booksReducer(state={books:[]}, action){
    switch(action.type){
        case 'added_book':
            let books = [...state.books, action.book];
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
    }

    render(){
        return(
            <tr>
                <td>{ this.props.isbn }</td>
                <td>{ this.props.title }</td>
                <td>{ this.props.author }</td>
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

class Library extends React.Component{
	constructor(props){
		super(props);

        store.subscribe( () => this.forceUpdate() );
        fetchBooksFromServer();
    }

	render(){
        return (
            <div>
                <h1>Glarimy Library</h1><hr/>
                <AddForm/>
                <hr/>
                <Books store={store}/>
            </div>
        );
	}
};

ReactDOM.render(<Library />, document.getElementById('library'));