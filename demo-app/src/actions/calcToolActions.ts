import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

export type MathActions =
  | typeof ADD_ACTION
  | typeof SUBTRACT_ACTION;

export interface MathAction<T = MathActions> extends Action<T> {
  payload: {
    num: number;
  }
}

export function isMathAction(action: any): action is MathAction {
  return ([
    ADD_ACTION, SUBTRACT_ACTION
  ]).includes(action?.type);
}


export interface AddAction extends MathAction<typeof ADD_ACTION> { }

export function isAddAction(action: any): action is AddAction {
  return action?.type === ADD_ACTION;
}

export type CreateAddAction = (value: number) => AddAction;

export const createAddAction: CreateAddAction = (value) => ({
  type: ADD_ACTION,
  payload: { num: value },
});

export interface SubtractAction extends MathAction<typeof SUBTRACT_ACTION> { }

export function isSubtractAction(action: any): action is SubtractAction {
  return action?.type === SUBTRACT_ACTION;
}

export type CreateSubtractAction = (value: number) => SubtractAction;

export const createSubtractAction: CreateSubtractAction = (value) => ({
  type: SUBTRACT_ACTION,
  payload: { num: value },
});