import {ACTION_TYPES} from "../actions/actions.js";

export function dataReducer(state={first:0, second:0}, action){
    switch(action.type){
        case ACTION_TYPES.NEW_DATA:
            console.log(action);
            return {
                first: action.first,
                second: action.second
            }
        default:
            return {
                first: 0,
                second: 0
            }
    }
}