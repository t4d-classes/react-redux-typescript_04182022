import { Action, AnyAction, Dispatch } from 'redux';

import { Car } from '../models/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export interface RefreshCarsRequestAction extends Action<typeof REFRESH_CARS_REQUEST_ACTION> { }

export function isRefreshCarsRequestAction(action: any): action is RefreshCarsRequestAction {
  return action?.type === REFRESH_CARS_REQUEST_ACTION;
}

export type CreateRefreshCarsRequestAction = () => RefreshCarsRequestAction;

export const createRefreshCarsRequestAction: CreateRefreshCarsRequestAction = () => ({
  type:REFRESH_CARS_REQUEST_ACTION,
});

export interface RefreshCarsDoneAction extends Action<typeof REFRESH_CARS_DONE_ACTION> {
  payload: {
    cars: Car[];
  }
}

export function isRefreshCarsDoneAction(action: any): action is RefreshCarsDoneAction {
  return action?.type === REFRESH_CARS_DONE_ACTION;
}

export type CreateRefreshCarsDoneAction = (cars: Car[]) => RefreshCarsDoneAction;

export const createRefreshCarsDoneAction: CreateRefreshCarsDoneAction = (cars) => ({
  type: REFRESH_CARS_DONE_ACTION,
  payload: { cars },
});

export const refreshCars = () => {

  return async (dispatch: Dispatch) => {

    dispatch(createRefreshCarsRequestAction());
    const res = await fetch('http://localhost:3060/cars');
    const cars = await res.json();
    dispatch(createRefreshCarsDoneAction(cars));

  };

};