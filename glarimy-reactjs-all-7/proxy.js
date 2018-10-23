function proxy(store){
	return function(next){
		return function(action){
            fetch('gk.json').then(function(response){
                return response.json();
            }).then(function(quiz){
                action.data = quiz.questions;
                return next(action);
            });
		}
	}
};

export default proxy;
