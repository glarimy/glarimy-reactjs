export function bookReducer(state={books:[]}, action){
    switch(action.type){
        case 'added_book':
            let books = [...state.books, action.book];
            return {
                books: books
            };
        case 'removed_book':
            books = state.books.filter(function(b){
                return b.isbn != action.isbn
            });
            return {
                books: books
            };
        case 'fetched_books':
            return action.books;
        default:
            return {
                books: []
            };
    }
};