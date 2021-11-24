import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import DrawingBoard  from './components/DrawingBoard'
import LandingPage  from './components/LandingPage'
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
            <Route exact path = '/' component={LandingPage } />
            <Route path = "/drawing" component={DrawingBoard } />
            <Redirect to = "/" />
          </Switch> ) :
          (
            <Switch>
              <Route path = "/login" component={Login} />
              <Route path = "/signup" component={Signup} />
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
