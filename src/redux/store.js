import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';
import { ADD_COLUMN, ADD_CARD, UPDATE_SEARCHSTRING } from './actionTypes';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = state => state.columns;
// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const addCard = payload => ({type: ADD_CARD, payload });
export const updateSearchString = payload => ({type: UPDATE_SEARCHSTRING, payload}); 

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
