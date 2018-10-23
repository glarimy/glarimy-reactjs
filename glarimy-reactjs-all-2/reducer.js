export function quizReducer(state={questions:[]}, action){
  switch(action.type){
      case 'fetched_quiz':
          return {
              questions: action.data
          };
      default:
          return {
              questions: []
          };
  }
};