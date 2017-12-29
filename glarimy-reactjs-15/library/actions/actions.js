export const ACTION_TYPES = {
    ADDED_BOOK: 'added_book',
    REMOVED_BOOK: 'removed_book',
    FETCHED_BOOKS: 'fetched_books'
}
export function addBook(book) {
    return {
        type: ACTION_TYPES.ADDED_BOOK,
        book: book
    };
}

export function removeBook(isbn) {
    return {
        type: ACTION_TYPES.REMOVED_BOOK,
        isbn: isbn
    };
}

export function fetchBooks(books) {
    console.log(books);
    return {
        type: ACTION_TYPES.FETCHED_BOOKS,
        books: books,
        count: books.length
    };
}

export function addBookToServer(book){
    return (dispatch) => {
      fetch("/library/api/books", {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                isbn: book.isbn,
                title: book.title,
                author: book.author
            })
        }).then(function(response){
            return dispatch(addBook(book));
        });
    };
}

export function removeBookFromServer(isbn){
    return (dispatch) => {
      fetch("/library/api/books/"+isbn, {
            method: 'delete'
        }).then(function(response){
            return dispatch(removeBook(isbn));
        });
    };
}

export function fetchBooksFromServer() {
    return (dispatch) => {
        fetch("/library/api/books")
        .then((response) => {
                return response.json();
        }).then((books) => dispatch(fetchBooks(books)));
    };
}
