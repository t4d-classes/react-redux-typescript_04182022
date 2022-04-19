import { ChangeEvent, useState } from 'react';
import { NewCar } from '../models/cars';


export type CarFormProps = {
  buttonText?: string;
  onSubmitCar: (car: NewCar) => void;
};

export const CarForm = (props: CarFormProps) => {

  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });

  };

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    setCarForm({
      make: '', model: '', year: 1900, color: '', price: 0,
    });
  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>
        {props.buttonText}</button>
    </form>
  );

};


CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

