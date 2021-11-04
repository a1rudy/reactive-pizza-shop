const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'asc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];
const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

export { categoriesNames, sortItems, availableTypes, availableSizes };
