import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger' // This will log into our console information about redux actions & store
import thunk from 'redux-thunk' // This middleware allows us to use Promises in our actions (async in action)

import rootReducer from './rootReducer' // We will implement this later on, create a file exporting and empty object for now

import { save, load } from "redux-localstorage-simple";

const middlewares = applyMiddleware(thunk, createLogger(),save())

export default function configureStore(preloadedState = load()) { // preloadedState is useful for SSR, which we don't use
  const store = createStore(rootReducer, preloadedState, middlewares)

  return store
}
