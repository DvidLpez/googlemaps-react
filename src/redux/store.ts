import { createStore, applyMiddleware, compose, Store} from 'redux';
import  thunk from "redux-thunk";
import reducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store:Store = createStore(
   reducer, 
   compose(applyMiddleware(thunk),
   composeEnhancers()
   )
);

export default store;