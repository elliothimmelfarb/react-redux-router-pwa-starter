import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import persistState from 'redux-localstorage'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootReducer from '../rootReducer'

export const history = createBrowserHistory()

export default (initialState = {}) => {
  const middlewares = [
    ReduxThunk,
    routerMiddleware(history)
  ]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
    persistState(),
  ]
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  })
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(...enhancers),
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../rootReducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
