import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/reducer.js";
import logger from "../middlewere/logger.js";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const { getState, dispatch } = store;

export default store;