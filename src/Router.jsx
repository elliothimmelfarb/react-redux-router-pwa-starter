import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Welcome from './_Welcome'
import { history } from './store/store.dev'

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
    <ConnectedRouter history={ history }>
      <BrowserRouter>
        <div>
          { routes }
        </div>
      </BrowserRouter>
    </ConnectedRouter>
  )
}

export default Router
