import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import React, { useContext } from 'react';
// import './CheckoutElement.css';
import styles from './CheckoutElement.module.css';
import CartContext from '../../context/CartContext';

function CheckoutElement({
  itemNumber, productName, quantity, price, url, id, testidPrefix, removeItem }) {
  const {
    removeItemToCart,
  } = useContext(CartContext);

  return (
    <div className={ styles.container_CheckoutElement }>
      <div
        data-testid={ `${testidPrefix}element-order-table-item-number-${itemNumber}` }
      >
        { itemNumber + 1}
      </div>
      <div
        data-testid={ `${testidPrefix}element-order-table-name-${itemNumber}` }
      >
        { productName }
      </div>
      <div
        data-testid={ `${testidPrefix}element-order-table-quantity-${itemNumber}` }
      >
        { quantity }
      </div>
      <div
        data-testid={ `${testidPrefix}element-order-table-unit-price-${itemNumber}` }
      >
        { price.replace('.', ',') }
      </div>
      <div
        data-testid={ `${testidPrefix}element-order-table-sub-total-${itemNumber}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </div>
      <div className="container_image">
        <img
          src={ url }
          alt={ productName }
          data-testid={ `customer_products__img-card-bg-image${itemNumber}` }
        />
      </div>
      {
        removeItem && (
          <button
            type="button"
            className="rm_item"
            data-testid={ `${testidPrefix}element-order-table-remove-${itemNumber}` }
            onClick={ () => removeItemToCart({ productName, quantity, price, url, id }) }
          >
            Remover
          </button>
        )
      }
    </div>
  );
}

CheckoutElement.propTypes = {
  itemNumber: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  testidPrefix: PropTypes.string.isRequired,
  removeItem: PropTypes.bool,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

CheckoutElement.defaultProps = {
  removeItem: false,
};

export default CheckoutElement;
