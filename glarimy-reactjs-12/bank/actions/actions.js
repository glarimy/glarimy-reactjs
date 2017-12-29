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

export function fetchBooks() {
    return {
        type: ACTION_TYPES.FETCHED_BOOKS
    };
}