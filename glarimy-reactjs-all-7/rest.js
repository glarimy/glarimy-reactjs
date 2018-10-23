import store from "./store.js";
import {saveQuestions} from "./actions"

export function fetchQuizFromServer(subject) {
    return fetch('gk.json').then(function(response){
            return response.json();
        }).then(function(quiz){
            store.dispatch(saveQuestions(quiz));
        });
};