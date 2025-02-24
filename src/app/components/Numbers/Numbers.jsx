'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Numbers.module.css";
import rect from "@/app/public/rectangle.png";

export const Numbers = () => {
  const [profit, setProfit] = useState(0);
  const [deals, setDeals] = useState(0);
  const [subscribers, setSubscribers] = useState(0);

  const animateNumber = (setter, target, duration) => {
    let start = 0;
    setter === setProfit ? start = 2000 : 0;
    setter === setSubscribers ? start = 374000 : 0;
    const stepTime = duration / target;
    const maxDuration = 1500;
    const intervalTime = Math.min(stepTime, maxDuration / target);
    const timer = setInterval(() => {
      start += 1;
      setter(start);
      if (start >= target) clearInterval(timer);
    }, intervalTime);
  };

  useEffect(() => {
      animateNumber(setProfit, 2756, 1500);
      animateNumber(setDeals, 67, 1500);
      animateNumber(setSubscribers, 375000, 1500);
  }, []);

  return (
    <div className={styles.wrapper} id="numbers">
      <div className={styles.tab}>
        <Image src={rect} width={272} alt="tab" />
      </div>
      <h2 className={styles.header}>цифры</h2>
      <p className={styles.date}>Сентябрь 2022</p>
      <div className={styles.indicatorsArea}>
        <div>
          <p className={styles.indicator}>Торговой прибыли</p>
          <p className={styles.value}>{profit}%</p>
        </div>
        <div>
          <p className={styles.indicator}>фьючерсных и спотовых сделок</p>
          <p className={styles.value}>{deals}</p>
        </div>
        <div>
          <p className={styles.indicator}>прибыль подписчиков</p>
          <p className={styles.value}>{subscribers}</p>
        </div>
      </div>
    </div>
  );
};
