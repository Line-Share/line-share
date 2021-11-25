import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import DrawingBoard  from './components/DrawingBoard'
import LandingPage  from './components/LandingPage'
import Feed from './components/Feed'
import { Login, Signup } from './components/Auth'
import { me } from './redux'

class WebRoutes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path = "/drawing" component={DrawingBoard } />
            <Route path = "/feed" component={Feed} />
            <Redirect to = "/feed" />
          </Switch> ) :
          (
            <Switch>
              <Route exact path = '/' component={LandingPage } />
              <Route path = "/login" component={Login} />
              <Route path = "/signup" component={Signup} />
              {/* <Redirect to="/" /> */}
            </Switch>
          )
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  }
}
export default withRouter(connect(mapState, mapDispatch)(WebRoutes));
