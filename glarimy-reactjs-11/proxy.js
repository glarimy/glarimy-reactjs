function proxy(store){
	return function(next){
		return function(action){
			if(action.type == 'added_book'){
				fetch('/book', {
					method: 'post',
					data: action.book
				}).then(function(response){
					return next(action);
				});
			}
			if(action.type == 'removed_book'){
				fetch(`/book/${action.isbn}`, {
					method: 'delete'
				}).then(function(response){
					return next(action);
				});
			}
			if(action.type == 'fetched_books'){
				fetch('/books.json')
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
