import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * A wrapper for <Route> that redirects to the login
 * screen if you're not yet authenticated.
 */
export default function PrivateRoute ({ children, ...rest }) {
  const user = useSelector(state => state.User)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.object
}
