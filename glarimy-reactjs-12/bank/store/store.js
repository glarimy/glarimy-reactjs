import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/reducer.js";
import logger from "../middlewere/logger.js";
import proxy from "../middlewere/proxy.js";

const store = createStore(rootReducer, applyMiddleware(logger, proxy));
const { getState, dispatch } = store;

export default store;