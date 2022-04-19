import { Reducer, AnyAction, combineReducers } from 'redux';

import { isAddAction, isMathAction, isSubtractAction } from '../actions/calcToolActions';
import { CalcToolState, HistoryEntry } from '../models/calcToolState';


export const resultReducer: Reducer<number, AnyAction> = (result = 0, action) => {

  // type narrowing
  if (isAddAction(action)) {
    return result + action.payload.num;
  }

  if (isSubtractAction(action)) {
    return result - action.payload.num;
  }

  return result;

};

export const historyReducer: Reducer<HistoryEntry[], AnyAction> = (history = [], action) => {
  if (isMathAction(action)) {
    return [
      ...history,
      {
        opName: action.type,
        opValue: action.payload.num,
        id: Math.max(...history.map(entry => entry.id), 0) + 1,
      }
    ]
  }

  return history;
}


export const calcToolReducer: Reducer<CalcToolState, AnyAction> = combineReducers({
  result: resultReducer,
  history: historyReducer,
});