import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  sellLemonade,
  buyStock,
  selectStock,
  selectBalance,
  selectSellPrice,
  selectBuyPrice,
  selectSold,
  selectBought,
} from './lemonadeSlice';
import styles from './Lemonade.module.css';

export function Lemonade() {
  const stock = useSelector(selectStock);
  const balance = useSelector(selectBalance);
  const sellPrice = useSelector(selectSellPrice);
  const buyPrice = useSelector(selectBuyPrice);
  const sold = useSelector(selectSold);
  const bought = useSelector(selectBought);
  const dispatch = useDispatch();
  const [sellAmount, setSellAmount] = useState(1);
  const [buyAmount, setBuyAmount] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.appCard}>
        <h1 className={styles.boxHeading}>
          Point Of Service
        </h1>
        <div className={styles.amountGroup}>
          <button
              className={`${styles.amountButton} ${sellAmount === 1 ? styles.amountButton_active : ''}`}
              aria-label="Sell 1 at a time"
              onClick={() => setSellAmount(1)}
          >
            1
          </button>
          <button
              className={`${styles.amountButton} ${sellAmount === 5 ? styles.amountButton_active : ''}`}
              aria-label="Sell 5 at a time"
              onClick={() => setSellAmount(5)}
          >
            5
          </button>
          <button
              className={`${styles.amountButton} ${sellAmount === 10 ? styles.amountButton_active : ''}`}
              aria-label="Sell 10 at a time"
              onClick={() => setSellAmount(10)}
          >
            10
          </button>
        </div>
        <button
            className={styles.actionButton}
            aria-label="Sell Lemonade"
            onClick={() => dispatch(sellLemonade(Number(sellAmount) || 0))}
            disabled={stock < sellAmount}
        >
          Sell {sellAmount} lemonade for ${sellAmount * sellPrice}
        </button>
      </div>
      <div className={styles.appCard}>
        <h1 className={styles.boxHeading}>
          Back Office
        </h1>
        <div className={styles.amountGroup}>
          <button
              className={`${styles.amountButton} ${buyAmount === 1 ? styles.amountButton_active : ''}`}
              aria-label="Buy 1 at a time"
              onClick={() => setBuyAmount(1)}
          >
            1
          </button>
          <button
              className={`${styles.amountButton} ${buyAmount === 5 ? styles.amountButton_active : ''}`}
              aria-label="Buy 5 at a time"
              onClick={() => setBuyAmount(5)}
          >
            5
          </button>
          <button
              className={`${styles.amountButton} ${buyAmount === 10 ? styles.amountButton_active : ''}`}
              aria-label="Buy 10 at a time"
              onClick={() => setBuyAmount(10)}
          >
            10
          </button>
        </div>
        <button
            className={styles.actionButton}
            aria-label="Buy Stock"
            onClick={() => dispatch(buyStock(Number(buyAmount) || 0))}
            disabled={balance < buyAmount * buyPrice}
        >
          Buy {buyAmount} lemonade for ${buyAmount * buyPrice}
        </button>
      </div>
      <div className={styles.appCard}>
        <h1 className={styles.boxHeading}>
          Report
        </h1>
        <div className={styles.reportValue}>
          <span>Balance:</span> ${balance}
        </div>
        <div className={styles.reportValue}>
          <span>Stock:</span> {stock}
        </div>
        <div className={styles.reportValue}>
          <span>Total sold:</span> {sold}
        </div>
        <div className={styles.reportValue}>
          <span>Total bought:</span> {bought}
        </div>
      </div>
    </div>
  );
}
