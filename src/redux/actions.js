import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from './types';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const enableButtons = () => ({ type: ENABLE_BUTTONS });
export const disableButtons = () => ({ type: DISABLE_BUTTONS });
export const asyncIncrement = () => (dispatch) => {
  dispatch(disableButtons());
  setTimeout(() => {
    dispatch(increment());
    dispatch(enableButtons());
  }, 2000);
};
export const changeTheme = (newTheme) => ({ type: CHANGE_THEME, payload: newTheme });
