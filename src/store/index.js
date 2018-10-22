import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer.bind(this, {inputValue:"input", list:[1,2,3]}));

export default store;