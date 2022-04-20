import { Reducer, AnyAction, combineReducers } from 'redux';

import { 
  // isAddAction, isDivideAction, isMultiplyAction, isSubtractAction
  isClearAction, isDeleteHistoryEntryAction, isMathAction
} from '../actions/calcToolActions';
import { CalcToolState, HistoryEntry } from '../models/calcToolState';

// type ROAnyAction = Readonly<AnyAction>;

// Reducer - Pure Functions

// Four Qualities of a Pure Function
// 1. The only data input comes through parameters
// 2. The parameters can never be mutated
// 3. No side-effects (no ajax calls from the reducer)
// 4. The only output of a pure function is the return value

// export const resultReducer: Reducer<number, ROAnyAction> = (result: number = 0, action) => {

//   // no side-effects allowed
//   // console.log('test');

//   // not allowed to mutate the parameter (stack)
//   // action = null;

//   // not allowed to mutate the object (heap)
//   // action.type = 'test';

//   if (isAddAction(action)) {
//     return result + action.payload.num;
//   }

//   if (isSubtractAction(action)) {
//     return result - action.payload.num;
//   }

//   if (isMultiplyAction(action)) {
//     return result * action.payload.num;
//   }

//   if (isDivideAction(action)) {
//     return result / action.payload.num;
//   }

//   if (isClearAction(action)) {
//     return 0;
//   }

//   return result;

// };

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
  history: historyReducer,
});