import "./glarimy.css";
import React from "react";
import {removeBookFromServer} from "./rest.js";

class BookDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let isbn = this.props.store.getState().viewReducer.isbn;
        console.log(isbn);
        let book =  this.props.store.getState().bookReducer.books.find(b => {
            console.log(b);
            return b.isbn == isbn;
        }); 
        return(
            <div>
                { book.isbn }<br/>
                { book.title }<br/>
                { book.author }<br/>
                { book.price }<br/>
                { book.rating }<br/>
            </div>
        );
    }
};

export default BookDetail;