import store from "./store.js";

export function fetchQuizFromServer(subject) {
    return fetch('gk.json').then(function(response){
            return response.json();
        }).then(function(quiz){
            store.dispatch({
                type: 'fetched_quiz',
                data: quiz.questions
            });
        });
};