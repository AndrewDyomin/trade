"use client";

import styles from "./Prices.module.css";

export const Prices = () => {

  return (
    <div className={styles.section}>
        {/* <div className={styles.offerArea}>
            <h4 className={styles.offer}>Попробуйте сейчас и получите<br/> 5 дней бесплатного пользования</h4>
            <form>
                <input 
                    type="email" 
                    placeholder="ВАШ E-MAIL"
                />
                <button type="submit">Попробовать</button>
            </form>
        </div> */}
      <h2 className={styles.header}>Тарифы</h2>
    </div>
  );
};

