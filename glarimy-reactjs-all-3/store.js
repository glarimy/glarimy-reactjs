import {createStore} from "redux";
import {quizReducer} from "./reducer.js";

const store = createStore(quizReducer);
const { getState, dispatch } = store;

export default store;