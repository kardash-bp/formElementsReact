import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/header'
import Form from './components/form'
import User from './components/user'

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/form' exact component={Form} />
        <Route path='/user' exact component={User} />
      </Switch>
    </div>
  )
}

export default Routes
