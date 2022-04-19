import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CalcToolState, HistoryEntry } from "../models/calcToolState";
import {
  createAddAction, createClearAction, createDeleteHistoryEntryAction,
  createDivideAction, createMultiplyAction, createSubtractAction,
} from "../actions/calcToolActions";

export const useCalcTool = () => {

  const result = useSelector<CalcToolState, number>(
    state => state.result);

  const history = useSelector<CalcToolState, HistoryEntry[]>(
    state => state.history);

  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction
  }, dispatch);

  return {
    ...boundActions,
    result,
    history,
  };

};