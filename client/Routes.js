import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import DrawingBoard  from './components/DrawingBoard'
import LandingPage  from './components/LandingPage'

class WebRoutes extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path = '/' component={LandingPage } />
            <Route path = "/drawing" component={DrawingBoard } />
            <Redirect to = "/" />
          </Switch>
      </div>
    )
  }
}

export default withRouter(WebRoutes);
