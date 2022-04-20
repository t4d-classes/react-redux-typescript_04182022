// React 18
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Color } from './models/colors';
import { Car } from './models/cars';

import { calcToolStore } from './stores/calcToolStore';
import { colorToolStore } from './stores/colorToolStore';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Ford', model: 'T', year: 1918, color: 'blue', price: 800 },
];

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <>
    <Provider store={colorToolStore}>
      <ColorTool headerText="Color Tool" />
    </Provider>
    <CarTool cars={carList} />
    <Provider store={calcToolStore}>
      <CalcTool />
    </Provider>
  </>
);
