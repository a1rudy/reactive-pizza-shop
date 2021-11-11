import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sortIcon from '../assets/img/sort-icon.svg';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisialePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const toggleVisiblePopup = () => {
    setVisialePopup(!visiblePopup);
  };

  const handleOutSideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisialePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutSideClick);
  }, []);

  const handleActiveItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisialePopup(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img
          className={classNames('sort__label-icon', { rotated: visiblePopup })}
          src={sortIcon}
          alt="sort icon"
        />
        <p className="sort__label-text">Сортировка по:</p>
        <span className="sort__label-type" onClick={toggleVisiblePopup}>
          {activeLabel}
        </span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul className="sort__type-list">
            {items &&
              items.map((obj, index) => (
                <li
                  className={classNames('sort__type', {
                    sort__type_active: activeSortType === index,
                  })}
                  onClick={() => handleActiveItem(obj)}
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
