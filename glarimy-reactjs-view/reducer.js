import { combineReducers } from 'redux'
import {bookReducer} from './bookReducer'
import {countReducer} from './countReducer'
import {viewReducer} from './viewReducer'

export default combineReducers({
  bookReducer,
  countReducer,
  viewReducer
})