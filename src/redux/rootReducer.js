import { INCREMENT, DECREMENT } from './types';

export default function rootReducer(state, action) {
  const { type } = action;
  if (type === INCREMENT) {
    return state + 1;
  } else if (type === DECREMENT) {
    return state - 1;
  }

  return state;
}
