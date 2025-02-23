import Image from "next/image";
import styles from "./Numbers.module.css";
import rect from "@/app/public/rectangle.png";

export const Numbers = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.tab}>
          <Image src={rect} width={272} alt="tab" />
        </div>
        <h2 className={styles.header}>цифры</h2>
        <p className={styles.date}>Сентябрь 2022</p>
        <div className={styles.indicatorsArea}>
            <div>
                <p className={styles.indicator}>Торговой прибыли</p>
                <p className={styles.value}>2756%</p>
            </div>
            <div>
                <p className={styles.indicator}>фьючерсных и спотовых сделок</p>
                <p className={styles.value}>67</p>
            </div>
            <div>
                <p className={styles.indicator}>прибыль подписчиков</p>
                <p className={styles.value}>375000</p>
            </div>
        </div>
      </div>
    </>
  );
};
