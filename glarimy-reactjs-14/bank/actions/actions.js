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
    return {
        type: ACTION_TYPES.FETCHED_BOOKS,
        books: books,
        count: books.books.length
    };
}

export function addBookToServer(book){
    return (dispatch) => {
      fetch(`/book`, {
            method: 'post',
            data: book
        }).then(function(response){
            return dispatch(addBook(book));
        });
    };
}

export function removeBookFromServer(isbn){
    return (dispatch) => {
      fetch(`/book/${isbn}`, {
            method: 'delete'
        }).then(function(response){
            return dispatch(removeBook(isbn));
        });
    };
}

export function fetchBooksFromServer() {
    return (dispatch) => {
        fetch("/bank/data/books.json")
        .then((response) => {
                return response.json();
        }).then((books) => dispatch(fetchBooks(books)));
    };
}
