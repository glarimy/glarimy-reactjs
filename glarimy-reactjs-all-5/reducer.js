import { combineReducers } from 'redux'
import {quizReducer} from './quizReducer'
import {visualReducer} from './visualReducer'

export default combineReducers({
  quiz: quizReducer,
  visuals: visualReducer
})