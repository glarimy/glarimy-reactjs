export function countReducer(state={count:0}, action){
    switch(action.type){
        case 'added_book':
            let count = state.count+1;
            return {
                count: count
            };
        case 'removed_book':
            count = state.count-1;
            return {
                count: count
            };
        case 'fetched_books':
            console.log("fetched books in count: " + action.count);
            return {
                count: action.count
            };
        default:
            return {
                count: 0
            };
    }
};