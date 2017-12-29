import {ACTION_TYPES} from "../actions/actions.js";

function proxy(store){
	return function(next){
		return function(action){
			if(action.type == ACTION_TYPES.ADDED_BOOK){
				fetch('/book', {
					method: 'post',
					data: action.book
				}).then(function(response){
					return next(action);
				});
			}
			if(action.type == ACTION_TYPES.REMOVED_BOOK){
				fetch(`/book/${action.isbn}`, {
					method: 'delete'
				}).then(function(response){
					return next(action);
				});
			}
			if(action.type == ACTION_TYPES.FETCHED_BOOKS){
				fetch('/bank/data/books.json')
				.then(function(response){
					return response.json();
				}).then(function(books){
					action.books = books;
					action.count = books.books.length;
					return next(action);
				})
			}
		}
	}
};

export default proxy;
