import { useState } from 'react';


export const CalcTool = () => {

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
    </>
  );

};