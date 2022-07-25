import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Home,
  Login,
  Register,
  NotFound,
  MakeConsultation,
  Patients,
  RegisterPatient,
  EditConsultation
} from '../containers'
import PrivateRoute from './private-route'

function Routess() {
  return (
    <Router>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Register} path="/cadastro" />

        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute
          exact
          component={MakeConsultation}
          path="/new-appointments"
        />
        <PrivateRoute
          exact
          component={EditConsultation}
          path="/edit-consultations"
        />
        <PrivateRoute exact component={Patients} path="/patients" />
        <PrivateRoute
          exact
          component={RegisterPatient}
          path="/register-patient"
        />

        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

export default Routess
