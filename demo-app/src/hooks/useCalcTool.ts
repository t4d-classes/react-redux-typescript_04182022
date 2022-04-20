import { useMemo } from 'react';
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CalcToolState, HistoryEntry } from "../models/calcToolState";
import {
  createAddAction, createClearAction, createDeleteHistoryEntryAction,
  createDivideAction, createMultiplyAction, createSubtractAction,
} from "../actions/calcToolActions";
import { resultSelector, historySelector } from "../selectors/calcToolSelectors";

export const useCalcTool = () => {

  const result = useSelector<CalcToolState, number>(resultSelector);

  const history = useSelector<CalcToolState, HistoryEntry[]>(historySelector);

  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction
  }, dispatch), [dispatch]);

  return {
    ...boundActions,
    result,
    history,
  };

};