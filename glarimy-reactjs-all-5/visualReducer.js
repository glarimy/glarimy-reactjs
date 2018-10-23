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
        case 'fetched_quiz':
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
        case 'quiz_submitted':
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