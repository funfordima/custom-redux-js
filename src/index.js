import './styles.css';
// import createStore from './createStore';
// import { INCREMENT, DECREMENT } from './redux/types';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ?
    'light' :
    'dark';

  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);

  counter.textContent = state.counter;
  document.body.className = state.theme.value;

  [addBtn, subBtn, asyncBtn, themeBtn].forEach((btn) => btn.disabled = state.theme.disabled);
});

store.dispatch({ type: 'INIT_APP' });
