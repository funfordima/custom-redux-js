import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from './types';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => (dispatch) => {
  setTimeout(() => dispatch(increment()), 2000);
};
