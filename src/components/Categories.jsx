import React from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null)

  function handleActiveItem(index) {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => handleActiveItem(null)}>Все</li>
        {items.map((name, index) => (
          <li className={activeItem === index ? 'active' : ''} onClick={() => handleActiveItem(index)} key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
