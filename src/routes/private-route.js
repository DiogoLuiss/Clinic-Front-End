import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, isAdm, ...rest }) {
  const user = localStorage.getItem('clinic:userdata')
  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdm && JSON.parse(user).adm) {
    return <Redirect to="/" />
  }
  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdm: PropTypes.bool
}
