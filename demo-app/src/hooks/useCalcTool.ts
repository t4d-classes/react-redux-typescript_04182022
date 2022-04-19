import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CalcToolState } from "../models/calcToolState";
import { createAddAction, createSubtractAction } from "../actions/calcToolActions";



export const useCalcTool = () => {

  const result = useSelector<CalcToolState, number>(state => state.result);

  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
  }, dispatch);

  return {
    result,
    // add: boundActions.add,
    // subtract: boundActions.subtract,
    ...boundActions,
  };

};