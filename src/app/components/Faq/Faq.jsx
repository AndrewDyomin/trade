'use client'

import styles from "./Faq.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

export const Faq = () => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>часто задаваемые вопросы</h2>
        <div className={styles.questions}>
          <div className={first ? styles.active : styles.questionArea} onClick={() => {first ? setFirst(false) : setFirst(true)}}>
            <div className={styles.question}>
              <p className={styles.questionTitle}>Что такое TradeBlade</p>
              <div className={styles.arrow}>
                {!first && <KeyboardArrowDownIcon />}
                {first && <KeyboardArrowUpIcon />}
              </div>
            </div>
            {first && <p className={styles.answer}>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
              <br />
              <br />
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>}
          </div>
          <div className={second ? styles.active : styles.questionArea} onClick={() => {second ? setSecond(false) : setSecond(true)}}>
            <div className={styles.question}>
              <p className={styles.questionTitle}>Что TradeBlade предлагает инвесторам</p>
              <div className={styles.arrow}>
                {!second && <KeyboardArrowDownIcon />}
                {second && <KeyboardArrowUpIcon />}
              </div>
            </div>
            {second && <p className={styles.answer}>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
              <br />
              <br />
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>}
          </div>
          <div className={third ? styles.active : styles.questionArea} onClick={() => {third ? setThird(false) : setThird(true)}}>
            <div className={styles.question}>
              <p className={styles.questionTitle}>Должен ли я перевести свои средства на TradeBlade</p>
              <div className={styles.arrow}>
                {!third && <KeyboardArrowDownIcon />}
                {third && <KeyboardArrowUpIcon />}
              </div>
            </div>
            {third && <p className={styles.answer}>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
              <br />
              <br />
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>}
          </div>
        </div>
      </div>
    </>
  );
};
