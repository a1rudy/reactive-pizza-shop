import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, Button } from '../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';
import cartEmptyImage from '../assets/img/empty-cart.png';
import cartIcon from '../assets/img/cart-icon-black.svg';
import clearLogo from '../assets/img/trash-logo.svg';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', items);
  };

  return (
    <div className="container container_type_cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="cart__title">
              <img className="cart__logo" src={cartIcon} alt="cart logo" />
              Корзина
            </h2>
            <div className="cart__clear">
              <img className="cart__clear-logo" src={clearLogo} alt="clear logo" />
              <span className="cart__clear-text" onClick={onClearCart}>
                Очистить корзину
              </span>
            </div>
          </div>
          <div className="content__items">
            {addedPizzas.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <p className="cart__bottom-details-text">
                Всего пицц: <span className="cart__bottom-details-span">{totalCount} шт.</span>
              </p>
              <p className="cart__bottom-details-text">
                Сумма заказа: <span className="cart__bottom-details-span">{totalPrice} ₽</span>
              </p>
            </div>
            <div className="cart__bottom-buttons">
              <div href="/" className="button button-outline button-add go-back-btn">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link to="/">
                  <span className="go-back-btn__span">Вернуться назад</span>
                </Link>
              </div>
              <Button onClick={onClickOrder} className="pay-btn">
                <span className="pay-btn__span">Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart-empty">
          <h2 className="cart-empty__title">
            Корзина пустая <span className="cart-empty__title-span">😕</span>
          </h2>
          <p className="cart-empty__text">
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img className="cart-empty__image" src={cartEmptyImage} alt="empty cart" />
          <Link to="/" className="button button-black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
