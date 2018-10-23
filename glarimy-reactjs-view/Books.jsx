import "./glarimy.css";
import React from "react";
import Book from "./Book.jsx";
import store from "./store.js";

class Books extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <table>
                <tbody>
                    <tr><th>ISBN</th><th>Action</th><th>Action</th></tr>
                    { 
                        store.getState().bookReducer.books.map(book => (
                            <Book key={book.isbn} book={book} {...this.props}>
                            </Book>
                        )) 
                    }
                </tbody>
            </table>
        );
    }
};

export default Books;