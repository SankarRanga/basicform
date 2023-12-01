import { createStore } from 'redux';
import commonReducres from './reducers';

export const store = createStore(commonReducres);