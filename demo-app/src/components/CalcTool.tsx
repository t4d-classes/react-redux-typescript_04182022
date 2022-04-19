import { useState } from 'react';

import { useCalcTool } from '../hooks/useCalcTool';


export const CalcTool = () => {

  const { result, add, subtract } = useCalcTool();

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
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
        </fieldset>
      </form>
      <ul>
        {history.map(entry => <li>
          
        </li>)}
      </ul>
    </>
  );

};