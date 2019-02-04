import { createStore } from 'redux';

import AppReducer from './App/AppReducer';

const Store = createStore(AppReducer);

export default Store;