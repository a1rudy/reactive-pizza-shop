import { varSetLoaded, varSetPizzas } from '../../utils/constants';

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case varSetPizzas:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case varSetLoaded:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
