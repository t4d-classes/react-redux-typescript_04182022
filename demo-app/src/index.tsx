// React 18
import { createRoot } from 'react-dom/client';

import { HelloWorld } from './components/HelloWorld';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  /* React.createElement(HelloWorld) */
  <HelloWorld />
);

// // React 17
// import { render } from 'react-dom';

// import { HelloWorld } from './components/HelloWorld';

// render(
//   /* React.createElement(HelloWorld) */
//   <HelloWorld />,
//   document.querySelector('#root'),
// );