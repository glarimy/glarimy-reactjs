import "../styles/glarimy.css";
import React from "react";
import Book from "./Book.jsx";
import store from "../store/store.js";

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
                        store.getState().bookReducer.books.map(book => (
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