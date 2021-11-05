import axios from 'axios';
import { varSetLoaded, varSetPizzas } from '../../utils/constants';

export const setLoaded = (payload) => ({
  type: varSetLoaded,
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: varSetLoaded,
    payload: false,
  });

  axios
    .get(
      ` /pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: varSetPizzas,
  payload: items,
});
