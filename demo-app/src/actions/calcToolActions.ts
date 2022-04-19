import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';

export type MathActions =
  | typeof ADD_ACTION
  | typeof SUBTRACT_ACTION
  | typeof MULTIPLY_ACTION
  | typeof DIVIDE_ACTION;

export interface MathAction<T = MathActions> extends Action<T> {
  payload: {
    num: number;
  }
}

export function isMathAction(action: any): action is MathAction {
  return ([
    ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
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

export interface MultiplyAction extends MathAction<typeof MULTIPLY_ACTION> { }

export function isMultiplyAction(action: any): action is MultiplyAction {
  return action?.type === MULTIPLY_ACTION;
}

export type CreateMultiplyAction = (value: number) => MultiplyAction;

export const createMultiplyAction: CreateMultiplyAction = (value) => ({
  type: MULTIPLY_ACTION,
  payload: { num: value },
});

export interface DivideAction extends MathAction<typeof DIVIDE_ACTION> { }

export function isDivideAction(action: any): action is DivideAction {
  return action?.type === DIVIDE_ACTION;
}

export type CreateDivideAction = (value: number) => DivideAction;

export const createDivideAction: CreateDivideAction = (value) => ({
  type: DIVIDE_ACTION,
  payload: { num: value },
});


export interface ClearAction extends Action<typeof CLEAR_ACTION> { }

export function isClearAction(action: any): action is ClearAction {
  return action?.type ===CLEAR_ACTION;
}

export type CreateClearAction = () => ClearAction;

export const createClearAction: CreateClearAction = () => ({
  type:CLEAR_ACTION,
});


export interface DeleteHistoryEntryAction extends Action<typeof DELETE_HISTORY_ENTRY_ACTION> {
  payload: {
    entryId: number;
  }
}

export function isDeleteHistoryEntryAction(action: any): action is DeleteHistoryEntryAction {
  return action?.type === DELETE_HISTORY_ENTRY_ACTION;
}

export type CreateDeleteHistoryEntryAction = (entryId: number) => DeleteHistoryEntryAction;

export const createDeleteHistoryEntryAction: CreateDeleteHistoryEntryAction = (entryId) => ({
  type: DELETE_HISTORY_ENTRY_ACTION,
  payload: { entryId },
});