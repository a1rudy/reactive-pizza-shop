import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul className="categories__cells">
        <li
          className={classNames('categories__cell', { categories__cell_active: activeCategory === null })}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={classNames('categories__cell', { categories__cell_active: activeCategory === index })}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
