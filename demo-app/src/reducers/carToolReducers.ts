import { Reducer, AnyAction, combineReducers } from 'redux';

import { isRefreshCarsRequestAction, isRefreshCarsDoneAction } from '../actions/carToolActions';
import { Car } from '../models/cars';
import { CarToolState } from '../models/carToolState';

export const carsReducer: Reducer<Car[], AnyAction> = (cars = [], action) => {

  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  return cars;
}

export const editCarIdReducer: Reducer<number, AnyAction> = (editCarId = -1, action) => {

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