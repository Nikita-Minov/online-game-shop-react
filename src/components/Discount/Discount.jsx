import React from 'react';
import styles from './Discount.module.css';

const Discount = () => {
  return (
    <div className={styles.discountBlock}>
      <div className={styles.infoBlock}>
        <h1 className={styles.gameName}>CIVILIZATION VI</h1>
        <div className={styles.buyBlock}>
          <button className={styles.addInBasket}>Добавить в корзину</button>
          <div className={styles.price}>
            <p className={styles.priceDiscount}>-20%</p>
            <h3 className={styles.price}>789 RUB</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
