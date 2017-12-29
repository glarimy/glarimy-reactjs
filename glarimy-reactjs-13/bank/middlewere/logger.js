/*
function logger(store){
	return function(next){
		return function(action){
			console.log("logger::pre:action:", action);
			console.log("logger::pre:store:", store.getState());
			let ret = next(action);
			console.log("logger::post:action:", action);
			console.log("logger::post:store:", store.getState());
			return ret;
		}
	}
};
*/

const logger = store => next => action => {
	console.log("arrowlogger::pre:action:", action);
	console.log("arrowogger::pre:store:", store.getState());
	let ret = next(action);
	console.log("arrowlogger::post:action:", action);
	console.log("arrowlogger::post:store:", store.getState());
	return ret;
};
export default logger;
