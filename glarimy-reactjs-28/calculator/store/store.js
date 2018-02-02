import { createStore, applyMiddleware } from 'redux';
import { dataReducer } from "../reducers/dataReducer.js";
import validator from "../middlewere/validator.js";

const store = createStore(dataReducer, applyMiddleware(validator));
export default store;