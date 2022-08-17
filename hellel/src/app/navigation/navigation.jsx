import React from 'react'
import { Login } from '../../modules/login'
import { Main } from "./index"
import { Route, Switch } from "react-router-dom"

export const Navigation = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Main} />
        </Switch>
    )
}
