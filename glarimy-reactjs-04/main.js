import "./glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {createStore} from "redux";

const store = createStore(booksReducer);

function booksReducer(state={books:[]}, action){
    switch(action.type){
        default:
            return {
                books: [{
                    isbn: 1,
                    title: "Java",
                    author: "Krishna"
                },{
                    isbn: 2,
                    title: "Javascript",
                    author: "Mohan"
                },{
                    isbn: 3,
                    title: "React",
                    author: "Koyya"
                },{
                    isbn: 4,
                    title: "asdfasfd",
                    author: "asdfa oioi"
                }]
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

class Library extends React.Component{
	constructor(props){
		super(props);
    }

	render(){
        return (
            <div>
                <h1>Glarimy Library</h1>
                <hr/>
                <Books store={store}/>
            </div>
        );
	}
};

ReactDOM.render(<Library />, document.getElementById('library'));