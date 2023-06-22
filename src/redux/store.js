import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';
import { ADD_COLUMN, ADD_CARD, UPDATE_SEARCHSTRING } from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }] };
    case ADD_CARD:
      return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }] };
    case UPDATE_SEARCHSTRING:
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};
const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
