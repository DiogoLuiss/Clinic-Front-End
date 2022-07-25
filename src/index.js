import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyled from './GlobalStyled'
import AppProvider from './hooks'
import Routess from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ToastContainer theme="colored" autoClose={2500} />
    <AppProvider>
      <Routess />
    </AppProvider>

    <GlobalStyled />
  </>
)
