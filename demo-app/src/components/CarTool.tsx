import { Car } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
    </>
  );

};