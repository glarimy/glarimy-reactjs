import "./glarimy.css";
import React from "react";
import {removeBookFromServer} from "./rest.js";

class Book extends React.Component{
    constructor(props){
        super(props);
        this.removeBook = this.removeBook.bind(this);
        this.viewBook = this.viewBook.bind(this);
    }

    removeBook(){
        removeBookFromServer(this.props.isbn);
    }

    viewBook() {
        this.props.history.push('/view');
        this.props.store.dispatch({
            type: "selected",
            "isbn": this.props.book.isbn
        });
    }

    render(){
        return(
            <tr>
                <td>{ this.props.book.isbn }</td>
                <td><button onClick={this.removeBook}>Delete</button></td>
                <td><button onClick={this.viewBook}>View</button></td>
            </tr>
        );
    }
};

export default Book;