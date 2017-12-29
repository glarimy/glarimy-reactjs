import {ACTION_TYPES} from "../actions/actions.js";

export function bookReducer(state={books:[]}, action){
    switch(action.type){
        case ACTION_TYPES.ADDED_BOOK:
            let books = [...state.books, action.book];
            return {
                books: books
            };
        case ACTION_TYPES.REMOVED_BOOK:
            books = state.books.filter(function(b){
                return b.isbn != action.isbn
            });
            return {
                books: books
            };
        case ACTION_TYPES.FETCHED_BOOKS:
            return action.books;
        default:
            return {
                books: []
            };
    }
};