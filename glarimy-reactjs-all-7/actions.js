export const EVENT = {
    FETCHED_QUIZ: "fetched_quiz",
    QUIZ_SUBMITTED: "quiz_submitted"
}

export function saveQuestions(questions){
    return {
        type: EVENT.FETCHED_QUIZ,
        data: questions
    };
}

export function sendOptions(options){
    return {
        type: EVENT.QUIZ_SUBMITTED,
        options: options
    }; 
}