import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dummyReducer from './user';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth'
import post from './post'

const reducer = combineReducers({ auth, post })

const middleware = composeWithDevTools(applyMiddleware(createLogger({collapsed: true}), thunkMiddleware))

const store = createStore(
  reducer,
  middleware
);

export default store;
export * from './auth'
