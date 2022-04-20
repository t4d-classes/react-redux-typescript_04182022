import { useState, useCallback } from 'react';

import { Car, NewCar } from '../models/cars';
import { useList } from '../hooks/useList';
import { useCarTool } from '../hooks/useCarTool';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const [ cars_old, appendCar, replaceCar, removeCar ] = useList([]);

  const [ editCarId_old, setEditCarId ] = useState(-1);

  const { cars, editCarId } = useCarTool();

  const cancelEditMode = useCallback(() => setEditCarId(-1), []);

  const addCar = useCallback((car: NewCar) => {
    // appendCar(car);
    // cancelEditMode();
  }, [appendCar, cancelEditMode]);

  const saveCar = useCallback((car: Car) => {
    // replaceCar(car);
    // cancelEditMode();
  }, [replaceCar, cancelEditMode]);

  const deleteCar = useCallback((carId: number) => {
    // removeCar(carId);
    // cancelEditMode();
  }, [removeCar, cancelEditMode]);

  const editCar = useCallback((carId: number) => setEditCarId(carId), []);

  const cancelCar = useCallback(() => cancelEditMode(), [cancelEditMode]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};