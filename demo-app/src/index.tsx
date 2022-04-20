// React 18
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { calcToolStore } from './stores/calcToolStore';
import { colorToolStore } from './stores/colorToolStore';
import { carToolStore } from './stores/carToolStore';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <>
    <Provider store={colorToolStore}>
      <ColorTool headerText="Color Tool" />
    </Provider>
    <Provider store={carToolStore}>
      <CarTool />
    </Provider>
    <Provider store={calcToolStore}>
      <CalcTool />
    </Provider>
  </>
);
