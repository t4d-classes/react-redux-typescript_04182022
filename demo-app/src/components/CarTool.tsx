import { useState } from 'react';

import { Car, NewCar } from '../models/cars';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  const [ cars, setCars ] = useState([...props.cars]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const cancelEditMode = () => setEditCarId(-1);

  const addCar = (car: NewCar) => {
    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]);
    cancelEditMode();
  };

  const saveCar = (car: Car) => {
    const newCars = [...cars];
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    cancelEditMode();
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
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