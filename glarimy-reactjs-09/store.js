import {createStore} from "redux";
import {booksReducer} from "./reducer.js";

const store = createStore(booksReducer);
const { getState, dispatch } = store;

export default store;