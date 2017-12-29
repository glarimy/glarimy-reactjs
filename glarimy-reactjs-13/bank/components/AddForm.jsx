import "../styles/glarimy.css";
import React from "react";
import store from "../store/store.js";
import {addBookToServer} from "../actions/actions.js";

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
        store.dispatch(addBookToServer(this.state));
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

export default AddForm;