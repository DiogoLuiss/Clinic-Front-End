import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (UserInfo) => {
    setUserData(UserInfo)

    await localStorage.setItem('clinic:userdata', JSON.stringify(UserInfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const loadUser = await localStorage.getItem('clinic:userdata')

      if (loadUser) {
        setUserData(JSON.parse(loadUser))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('userUser must be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
