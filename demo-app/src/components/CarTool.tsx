import { useState } from 'react';

import { Car, NewCar } from '../models/cars';
import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  const [ cars, appendCar, replaceCar, removeCar ] = useList([...props.cars]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const cancelEditMode = () => setEditCarId(-1);

  const addCar = (car: NewCar) => {
    appendCar(car);
    cancelEditMode();
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    cancelEditMode();
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    cancelEditMode();
  };

  const editCar = (carId: number) => setEditCarId(carId);

  const cancelCar = () => cancelEditMode();
  ;

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