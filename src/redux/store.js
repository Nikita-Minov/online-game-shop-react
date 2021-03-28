import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import gameReducer from './game-reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  game: gameReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;
