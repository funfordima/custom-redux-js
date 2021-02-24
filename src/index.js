import './styles.css';
// import createStore from './createStore';
// import { INCREMENT, DECREMENT } from './redux/types';
import { increment, decrement, asyncIncrement } from './redux/actions';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => {
  const state = store.getState();

  counter.textContent = state;
});

store.dispatch({ type: 'INIT_APP' });

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark');
});
