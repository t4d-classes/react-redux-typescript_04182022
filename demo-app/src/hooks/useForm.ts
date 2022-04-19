import { ChangeEvent, useState } from 'react';

export type HTMLFormControls =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;


export type Change = (e: ChangeEvent<HTMLFormControls>) => void;

export type ResetForm = () => void;

export type UseForm = <T>(initialFormData: T) => [T, Change, ResetForm];

export const useForm: UseForm = (initialFormData) => {

  const [ form, setForm ] = useState({...initialFormData});

  const change: Change = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });

  };

  const resetForm = () => setForm({...initialFormData});

  return [ form, change, resetForm ]; // tuple
};