export function quizReducer(state={
    questions:[], 
    score: 0, 
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
                questions: action.data,
                score: 0,
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
            let score = 0;
            state.questions.map(q=>{
                let entry = action.options.find((o)=>{
                    return q.id == o.id
                });
                if(entry.option == q.answer)
                    score++;
            });   
            return {
                questions: state.questions,
                score: score,
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
                questions: [],
                score: 0,
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