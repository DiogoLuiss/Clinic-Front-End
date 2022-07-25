import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext({})
export const CardProvider = ({ children }) => {
  const [FilterPatients, setFilterPatients] = useState([])
  const [FilterConsultations, setFilterConsultations] = useState([])
  return (
    <CartContext.Provider
      value={{
        FilterPatients,
        setFilterPatients,
        FilterConsultations,
        setFilterConsultations
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CardProvider.propTypes = {
  children: PropTypes.node
}
