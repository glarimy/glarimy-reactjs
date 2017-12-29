import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducer.js";
import logger from "./logger.js";
import proxy from "./proxy.js";

const store = createStore(rootReducer, applyMiddleware(logger, proxy));
const { getState, dispatch } = store;

export default store;