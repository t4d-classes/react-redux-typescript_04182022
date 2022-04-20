import { useState } from 'react';

import { useCalcTool } from '../hooks/useCalcTool';


export const CalcTool = () => {

  const {
    result, history,
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry,
  } = useCalcTool();

  const [ numInput, setNumInput ] = useState(0);

  const doClear = () => {
    clear();
    setNumInput(0);
  };

  return (
    <>
      <header>
        <h2>Calc Tool</h2>
      </header>
      <div>
        Result: {result}
      </div>
      <form>
        <label>
          Num Input:
          <input type="number" value={numInput}
            onChange={e => setNumInput(e.target.valueAsNumber)} />
        </label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={() => divide(numInput)}>/</button>
          <button type="button" onClick={doClear}>Clear</button>
        </fieldset>
      </form>
      <ul>
        {history.map(entry => <li>
          {entry.opName} {entry.opValue}
          <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
    </>
  );

};