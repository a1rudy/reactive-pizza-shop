import {
  varAddPizzaCart,
  varClearCart,
  varRemoveCartItem,
  varPlusCartItem,
  varMinusCartItem,
} from '../../utils/constants';

export const addPizzaToCart = (pizzaObj) => ({
  type: varAddPizzaCart,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: varClearCart,
});

export const removeCartItem = (id) => ({
  type: varRemoveCartItem,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: varPlusCartItem,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: varMinusCartItem,
  payload: id,
});
