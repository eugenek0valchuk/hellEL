import React from 'react'
import { Login } from '../../modules/login'
import { Route, Switch } from "react-router-dom"

export const Navigation = () => {
  return (
    <Switch>
        <Route exact path="/login" component={Login} />
    </Switch>
  )
}
