import React from "react"
import { Navigation } from "./navigation"
import { createBrowserHistory } from "history"
import { Router } from "react-router-dom"

export const routerHistory = createBrowserHistory()
export const App = () => (
  <div>
    <Router history={routerHistory}>
      <Navigation />
    </Router>
  </div >
)

