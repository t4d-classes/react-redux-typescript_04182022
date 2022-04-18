import { ChangeEvent, useState } from 'react';
import { NewColor } from '../models/colors';


export type ColorFormProps = {
  buttonText?: string;
  onSubmitColor: (color: NewColor) => void;
};

export const ColorForm = (props: ColorFormProps) => {

  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    // copy the original form object
    // set the property we are updating
    // passing in the new object to setColorForm, to update the state object and re-render the component

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    setColorForm({ name: '', hexcode: '' });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>
        {props.buttonText}</button>
    </form>
  );

};


ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

