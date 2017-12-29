import { combineReducers } from 'redux'
import {bookReducer} from './bookReducer'
import {countReducer} from './countReducer'

export default combineReducers({
  bookReducer,
  countReducer
})