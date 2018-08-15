import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import welcome from './_Welcome/duck'

export default combineReducers({
  welcome,
  routing: routerReducer,
})
