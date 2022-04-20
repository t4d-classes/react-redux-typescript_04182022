import { Action, Dispatch } from 'redux';

import { Car, NewCar } from '../models/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const REMOVE_CAR_REQUEST_ACTION = 'REMOVE_CAR_REQUEST';

export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

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


export interface AppendCarRequestAction extends Action<typeof APPEND_CAR_REQUEST_ACTION> {
  payload: {
    car: NewCar
  }
}

export function isAppendCarRequestAction(action: any): action is AppendCarRequestAction {
  return action?.type === APPEND_CAR_REQUEST_ACTION;
}

export type CreateAppendCarRequestAction = (car: NewCar) => AppendCarRequestAction;

export const createAppendCarRequestAction: CreateAppendCarRequestAction = (car) => ({
  type:APPEND_CAR_REQUEST_ACTION,
  payload: {
    car,
  }
});

export const appendCar = (car: NewCar) => {

  return async (dispatch: Dispatch) => {

    dispatch(createAppendCarRequestAction(car));
    await fetch('http://localhost:3060/cars', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(car),
    });
    refreshCars()(dispatch);

  };

};

export interface ReplaceCarRequestAction extends Action<typeof REPLACE_CAR_REQUEST_ACTION> {
  payload: {
    car: Car
  }
}

export function isReplaceCarRequestAction(action: any): action is ReplaceCarRequestAction {
  return action?.type === REPLACE_CAR_REQUEST_ACTION;
}

export type CreateReplaceCarRequestAction = (car: Car) => ReplaceCarRequestAction;

export const createReplaceCarRequestAction: CreateReplaceCarRequestAction = (car) => ({
  type:REPLACE_CAR_REQUEST_ACTION,
  payload: {
    car,
  }
});

export const replaceCar = (car: Car) => {

  return async (dispatch: Dispatch) => {

    dispatch(createReplaceCarRequestAction(car));
    await fetch(`http://localhost:3060/cars/${encodeURIComponent(car.id)}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(car),
    });
    refreshCars()(dispatch);

  };

};

export interface RemoveCarRequestAction extends Action<typeof REMOVE_CAR_REQUEST_ACTION> {
  payload: {
    carId: number
  }
}

export function isRemoveCarRequestAction(action: any): action is RemoveCarRequestAction {
  return action?.type === REMOVE_CAR_REQUEST_ACTION;
}

export type CreateRemoveCarRequestAction = (carId: number) => RemoveCarRequestAction;

export const createRemoveCarRequestAction: CreateRemoveCarRequestAction = (carId) => ({
  type:REMOVE_CAR_REQUEST_ACTION,
  payload: {
    carId,
  }
});

export const removeCar = (carId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(createRemoveCarRequestAction(carId));
    await fetch(`http://localhost:3060/cars/${encodeURIComponent(carId)}`, {
      method: 'DELETE',
    });
    refreshCars()(dispatch);
  };
};

export interface EditCarAction extends Action<typeof EDIT_CAR_ACTION> {
  payload: {
    carId: number
  }
}

export function isEditCarAction(action: any): action is EditCarAction {
  return action?.type === EDIT_CAR_ACTION;
}

export type CreateEditCarAction = (carId: number) => EditCarAction;

export const createEditCarAction: CreateEditCarAction = (carId) => ({
  type:EDIT_CAR_ACTION,
  payload: {
    carId,
  }
});

export interface CancelCarAction extends Action<typeof CANCEL_CAR_ACTION> { }

export function isCancelCarAction(action: any): action is CancelCarAction {
  return action?.type === CANCEL_CAR_ACTION;
}

export type CreateCancelCarAction = () => CancelCarAction;

export const createCancelCarAction: CreateCancelCarAction = () => ({
  type:CANCEL_CAR_ACTION,
});
