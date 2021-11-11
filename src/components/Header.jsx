import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/img/pizza-logo.svg';
import cartIcon from '../assets/img/cart-icon.svg';
import { Button } from './index';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container container_type_header">
        <Link to="/">
          <div className="header__logo-wrap">
            <img className="header__logo" src={logo} alt="Pizza logo" />
            <div className="header__title-wrap">
              <h1 className="header__title">Reactive Pizza</h1>
              <p className="header__subtitle"> самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button-cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <img className='header__cart-icon' src={cartIcon} alt="cart icon" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
