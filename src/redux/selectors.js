import { createSelector } from 'reselect';

const getCards = (state) => state.cards;
const getSearchString = (state) => state.searchString;

export const getFilteredCards = createSelector(
  [getCards, getSearchString, (_, columnId) => columnId], 
  (cards, searchString, columnId) => {
    return cards.filter(card =>
      card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase())
    );
  }
);
