import { Reducer, AnyAction, combineReducers } from 'redux';

import { isAddAction, isClearAction, isDeleteHistoryEntryAction, isDivideAction, isMathAction, isMultiplyAction, isSubtractAction } from '../actions/calcToolActions';
import { CalcToolState, HistoryEntry } from '../models/calcToolState';


export const resultReducer: Reducer<number, AnyAction> = (result = 0, action) => {

  if (isAddAction(action)) {
    return result + action.payload.num;
  }

  if (isSubtractAction(action)) {
    return result - action.payload.num;
  }

  if (isMultiplyAction(action)) {
    return result * action.payload.num;
  }

  if (isDivideAction(action)) {
    return result / action.payload.num;
  }

  if (isClearAction(action)) {
    return 0;
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

  if (isClearAction(action)) {
    return [];
  }

  if (isDeleteHistoryEntryAction(action)) {
    return history.filter(entry => entry.id !== action.payload.entryId);
  }

  return history;
}


export const calcToolReducer: Reducer<CalcToolState, AnyAction> = combineReducers({
  result: resultReducer,
  history: historyReducer,
});