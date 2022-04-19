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

  const addCar = (car: NewCar) => {

    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]);    

  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};