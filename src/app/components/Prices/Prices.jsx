"use client";

import { useState } from "react";
import styles from "./Prices.module.css";
import vector from "@/app/public/Vector5.png";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Prices = () => {
  const [spot, setSpot] = useState(true);
  const [futures, setFutures] = useState(false);

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>Тарифы</h2>
      <div className={styles.formatArea}>
        <button
          className={spot ? styles.activeButton : styles.button}
          onClick={() => {
            setSpot(true);
            setFutures(false);
          }}
        >
          СПОТ
        </button>
        <button
          className={futures ? styles.activeButton : styles.button}
          onClick={() => {
            setSpot(false);
            setFutures(true);
          }}
        >
          фьючерс
        </button>
      </div>
      <div className={styles.standartArea}>
        <h3 className={styles.planName}>Standart</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>Ручной трейдинг</p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>Личный кабинет со статистикой</p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
              Среднесрочные сделки с уровнями набора портфеля
            </p>
          </li>
        </ul>
        <div className={styles.termArea}>
          <p className={styles.termCost}>$234</p>
          <p className={styles.termProfit}>-35%</p>
          <button className={styles.termSelect}>
            12 месяцев <KeyboardArrowDownIcon />
          </button>
        </div>
        <button className={styles.tryButton}>
          <p className={styles.tryButtonAction}>Попробовать</p>
          <p className={styles.tryButtonCall}>5 дней бесплатно</p>
        </button>
      </div>
      <div className={`${styles.standartArea} ${styles.vipArea}`}>
        <h3 className={styles.planName}>VIP</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>Ручной трейдинг</p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>Личный кабинет со статистикой</p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
            Краткосрочные, среднесрочные и инвест сделки
            </p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
            Доступ в Vip чат с командой
            </p>
          </li>
          <li className={styles.item}>
            <Image src={vector} width={12} height={12} alt="vector" />
            <p className={styles.itemText}>
            Наш авторский курс по трейдингу
            </p>
          </li>
        </ul>
        <div className={styles.termArea}>
          <p className={styles.termCost}>$585</p>
          <p className={styles.termProfit}>-35%</p>
          <button className={styles.termSelect}>
            12 месяцев <KeyboardArrowDownIcon />
          </button>
        </div>
        <button className={styles.tryButton}>
          <p className={styles.tryButtonAction}>Попробовать</p>
          <p className={styles.tryButtonCall}>5 дней бесплатно</p>
        </button>
      </div>
    </div>
  );
};
