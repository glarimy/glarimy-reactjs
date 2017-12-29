import "../styles/glarimy.css";
import React from "react";
import Book from "./Book.jsx";
import store from "../store/store.js";
import { connect } from 'react-redux';
import {fetchBooksFromServer} from "../actions/actions.js";
import {withRouter} from 'react-router-dom';

class Books extends React.Component{
    constructor(props){
        super(props);
        console.log("books cons");
    }

    render(){
        return(
             <table>
                <tbody>
                    <tr><th>ISBN</th><th>Title</th><th>Author</th></tr>
                    { 
                        this.props.books.map(book => (
                            <Book title={ book.title } key={book.isbn} isbn={book.isbn} author={book.author}>
                            </Book>
                        )) 
                    }
                </tbody>
            </table>
        );
    }
};

export default Books;