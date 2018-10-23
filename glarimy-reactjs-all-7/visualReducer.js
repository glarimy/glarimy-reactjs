import {EVENT} from './actions'

export function visualReducer(state={
    scoreDisplay: {
        display:'none'
    },
    searchDisplay: {
        display: 'block'
    },
    quizDisplay: {
        display: 'none'
    }}, action){
    switch(action.type){
        case EVENT.FETCHED_QUIZ:
            return {
                scoreDisplay: {
                    display: 'none'
                },
                searchDisplay: {
                    display: 'none'
                },
                quizDisplay: {
                    display: 'block'
                }
            };
        case EVENT.QUIZ_SUBMITTED:
            return {
                scoreDisplay: {
                    display: 'block'
                },
                searchDisplay: {
                    display: 'none'
                },
                quizDisplay: {
                    display: 'none'
                }
            };    
        default:
            return {
                scoreDisplay: {
                    display: 'none'
                },
                searchDisplay: {
                    display: 'block'
                },
                quizDisplay: {
                    display: 'none'
                }
            };
    }
};