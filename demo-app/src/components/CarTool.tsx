import { useCarTool } from '../hooks/useCarTool';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const {
    cars, editCarId,
    addCar, saveCar, deleteCar,
    editCar, cancelCar,
  } = useCarTool();

  return (
    <>
      <header>
        <h2>Car Tool</h2>
      </header>
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};