import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducer.js";
import proxy from "./proxy";

const store = createStore(rootReducer, applyMiddleware(proxy));
const { getState, dispatch } = store;

export default store;