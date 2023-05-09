import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// store.js create a store with reducer
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;