import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/root-reducer.js";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
const { getState, dispatch } = store;

export default store;