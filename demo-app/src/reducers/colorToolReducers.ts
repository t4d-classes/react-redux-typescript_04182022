import { Reducer, AnyAction, combineReducers } from 'redux';

import { isAppendColorAction } from '../actions/colorToolActions';
import { Color } from '../models/colors';
import { ColorToolState } from '../models/colorToolState';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

export const colorsReducer: Reducer<Color[], AnyAction> = (colors = colorList, action) => {

  if (isAppendColorAction(action)) {
    return [
      ...colors,
      {
        ...action.payload.color,
        id: Math.max(...colors.map(color => color.id), 0) + 1,
      }
    ]
  }

  return colors;
}


export const colorToolReducer: Reducer<ColorToolState, AnyAction> = combineReducers({
  colors: colorsReducer,
});