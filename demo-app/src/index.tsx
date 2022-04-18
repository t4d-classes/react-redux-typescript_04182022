// React 18
import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  /* React.createElement(ColorTool) */
  <>
    <ColorTool />
    <CarTool />
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