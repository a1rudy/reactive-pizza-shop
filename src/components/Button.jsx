import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, children }) {
  return (
    <button className={classNames('button', className)}>
      {children}
    </button>
  )
}

export default Button;