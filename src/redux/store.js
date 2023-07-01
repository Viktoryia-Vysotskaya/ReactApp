import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}
const reducer = combineReducers(subreducers);
const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
