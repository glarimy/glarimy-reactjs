const validator = store => next => action => {
	if(isNaN(action.first) || isNaN(action.second)){
		action.first = 0;
		action.second = 0;
		next(action);
		return 'invalid';
	}else{
		return next(action);
	}
};
export default validator;
