import React from 'react'
import {Route, Switch} from 'react-router-dom'

import SocialMedia from '../../apps/social-media'

import Home from '../../apps/_home'
import PageNotFound from '../../apps/_commons/PageNotFound'

export default function Router (props) {
  return (
    <Switch>
      <Route path='/social-media' component={SocialMedia} />

      <Route path='/' component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  )
}
