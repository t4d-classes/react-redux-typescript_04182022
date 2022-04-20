import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { ColorToolState } from "../models/colorToolState";
import { createAppendColorAction } from "../actions/colorToolActions";
import { Color } from "../models/colors";

export const useColorTool = () => {

  const colors = useSelector<ColorToolState, Color[]>(state => state.colors);

  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    addColor: createAppendColorAction,
  }, dispatch);

  return {
    ...boundActions,
    colors,
  };

};