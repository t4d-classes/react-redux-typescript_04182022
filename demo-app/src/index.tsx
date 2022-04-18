// React 18
import { createRoot } from 'react-dom/client';

import { Color } from './models/colors';
import { Car } from './models/cars';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Ford', model: 'T', year: 1918, color: 'blue', price: 800 },
];

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  /* React.createElement(ColorTool, { colors: colorList }) */
  <>
    <ColorTool colors={colorList} headerText="Color Tool" />
    <CarTool cars={carList} />
  </>
);

// // React 17
// import { render } from 'react-dom';

// import { HelloWorld } from './components/HelloWorld';

// render(
//   /* React.createElement(HelloWorld) */
//   <HelloWorld />,
//   document.querySelector('#root'),
// );