import {createStore} from 'redux';
import {dataReducer} from "../reducers/dataReducer.js";
import {ACTION_TYPES} from "../actions/actions.js";

const store = createStore(dataReducer);

export default store;