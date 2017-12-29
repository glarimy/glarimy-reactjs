import store from "./store.js";

export function fetchBooksFromServer() {
    return fetch('books.json').then(function(response){
            return response.json();
        }).then(function(books){
            store.dispatch({
                type: 'fetched_books',
                books: books
            });
        });
};

export function addBookToServer(book){
    return fetch('/book',{
            method: 'post',
            data: book
        }).then(function(response){
            store.dispatch({
                type: 'added_book',
                book: book
            });
        });
}

export function removeBookFromServer(isbn){
    return fetch(`/book/${isbn}`,{
            method: 'delete'
        }).then(function(response){
            store.dispatch({
                type: 'removed_book',
                isbn: isbn
            });
        });
}