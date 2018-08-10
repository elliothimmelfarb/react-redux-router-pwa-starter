import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter, Route } from 'react-router-dom'
// import { history } from './store/store.dev'

import Welcome from './_Welcome'

// Register routes to the application by adding a record below
export const routeRoster = [
  {
    path: '/',
    name: 'Welcome',
    container: Welcome,
  },
]

function Router() {
  const routes = routeRoster.map(r => (
    <Route
      exact
      key={ r.name }
      path={ r.path }
      render={ () => <r.container /> }
    />
  ))

  return (
    <BrowserRouter>
      <div>
        { routes }
      </div>
    </BrowserRouter>
  )
}

export default Router
