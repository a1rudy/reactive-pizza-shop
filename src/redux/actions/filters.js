import { varSetSortBy, varSetCategory } from '../../utils/constants';

export const setSortBy = ({ type, order }) => ({
  type: varSetSortBy,
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: varSetCategory,
  payload: catIndex,
});
