import { Car } from '../models/cars';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

export const CarTable = (props: CarTableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Colour</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car =>
          car.id === props.editCarId
            ? <CarEditRow key={car.id} car={car}
                onSaveCar={props.onSaveCar}
                onCancelCar={props.onCancelCar} />
            : <CarViewRow key={car.id} car={car}
                onEditCar={props.onEditCar}
                onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>    
  );

};