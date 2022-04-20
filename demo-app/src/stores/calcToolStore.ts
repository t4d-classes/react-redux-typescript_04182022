import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { calcToolReducer } from '../reducers/calcToolReducers';

export const calcToolStore = createStore(calcToolReducer, composeWithDevTools());