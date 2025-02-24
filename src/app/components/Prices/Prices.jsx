"use client";

import { useState } from "react";
import styles from "./Prices.module.css";

export const Prices = () => {

    const [spot, setSpot] = useState(true);
    const [futures, setFutures] = useState(false);

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>Тарифы</h2>
      <div className={styles.formatArea}>
        <button className={spot ? styles.activeButton : styles.button} onClick={()=> {setSpot(true); setFutures(false)}}>СПОТ</button>
        <button className={futures ? styles.activeButton : styles.button} onClick={()=> {setSpot(false); setFutures(true)}}>фьючерс</button>
      </div>
      <div className={styles.standartArea}>
        <h3 className={styles.planName}>Standart</h3>
        <ul className={styles.list}>
            <li className={styles.item}>Ручной трейдинг</li>
            
            <li className={styles.item}>Автоматическое или полуавтоматическое копирование сделок</li>
            <li className={styles.item}>Личный кабинет со статистикой</li>
            <li className={styles.item}>Среднесрочные сделки с уровнями набора портфеля</li>
        </ul>
      </div>
    </div>
  );
};

