import {createStore} from "redux";
import rootReducer from "./reducer.js";

const store = createStore(rootReducer);
const { getState, dispatch } = store;

export default store;