import { useMemo, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { CarToolState } from "../models/carToolState";
import { Car } from "../models/cars";
import { refreshCars } from "../actions/carToolActions";

export const useCarTool = () => {

  const cars = useSelector<CarToolState, Car[]>(state => state.cars);
  const editCarId = useSelector<CarToolState, number>(state => state.editCarId);

  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    // refreshCars: refreshCars,
    // short-hand property
    refreshCars,
  }, dispatch), [dispatch]);

  useEffect(() => {
    boundActions.refreshCars();
  }, [boundActions]);

  return {
    ...boundActions,
    cars,
    editCarId,
  };

};