import { Reducer, AnyAction, combineReducers } from 'redux';

import { isRefreshCarsDoneAction, isEditCarAction, isCancelCarAction } from '../actions/carToolActions';
import { Car } from '../models/cars';
import { CarToolState } from '../models/carToolState';

export const carsReducer: Reducer<Car[], AnyAction> = (cars = [], action) => {

  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  return cars;
}

export const editCarIdReducer: Reducer<number, AnyAction> = (editCarId = -1, action) => {

  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (isRefreshCarsDoneAction(action) || isCancelCarAction(action)) {
    return -1;
  }

  return editCarId;
}

export const isLoadingReducer: Reducer<boolean, AnyAction> = (isLoading = false, action) => {

  if (String(action.type).endsWith('_REQUEST')) {
    return true;
  }

  if (String(action.type).endsWith('_DONE')) {
    return false;
  }
  
  return isLoading;
}

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  isLoading: isLoadingReducer,
});