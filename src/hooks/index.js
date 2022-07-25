import PropTypes from 'proptypes'
import React from 'react'

import { CardProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      {' '}
      <CardProvider> {children} </CardProvider>{' '}
    </UserProvider>
  )
}

export default AppProvider
AppProvider.propTypes = {
  children: PropTypes.node
}
