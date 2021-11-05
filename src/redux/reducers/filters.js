import { varSetSortBy, varSetCategory } from '../../utils/constants';

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case varSetSortBy:
      return {
        ...state,
        sortBy: action.payload,
      };

    case varSetCategory:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
