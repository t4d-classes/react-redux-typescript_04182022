import { Action } from 'redux';
import { NewColor } from '../models/colors';

export const APPEND_COLOR_ACTION = 'APPEND_COLOR';

export interface AppendColorAction extends Action<typeof APPEND_COLOR_ACTION> {
  payload: {
    color: NewColor
  }
}

export function isAppendColorAction(action: any): action is AppendColorAction {
  return action?.type === APPEND_COLOR_ACTION;
}

export type CreateAppendColorAction = (color: NewColor) => AppendColorAction;

export const createAppendColorAction: CreateAppendColorAction = (color) => ({
  type: APPEND_COLOR_ACTION,
  payload: { color },
});
