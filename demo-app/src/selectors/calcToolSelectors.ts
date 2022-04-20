import { createSelector } from 'reselect';

import { CalcToolState } from '../models/calcToolState';

export const historySelector = (state: CalcToolState) => state.history;

export const resultSelector = createSelector(
  historySelector,
  history => {

    return history.reduce( (r, entry) => {

      switch (entry.opName) {
        case 'ADD':
          return r + entry.opValue;
        case 'SUBTRACT':
          return r - entry.opValue;
        case 'MULTIPLY':
          return r * entry.opValue;
        case 'DIVIDE':
          return r / entry.opValue;
        default:
          return r;
      }

    }, 0 /* initial value of r */);

  },
);


