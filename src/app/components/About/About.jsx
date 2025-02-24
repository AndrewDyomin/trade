import Image from "next/image";
import styles from "./About.module.css";
import rect from "@/app/public/rectangle.png";

export const About = () => {
  return (
    <>
      <div className={styles.wrapper} id="about">
        <div className={styles.tab}>
          <Image src={rect} width={272} alt="tab" />
        </div>
        <div className={styles.desktop}>
          <div className={styles.titleArea}>
<h2 className={styles.header}>О компании</h2>
          <p className={styles.paragraph}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
            <br /> <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
          </div>
          <div className={styles.offerArea}>
            <h4 className={styles.offer}>
              Попробуйте сейчас и получите
              <br /> 5 дней бесплатного пользования
            </h4>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="ВАШ E-MAIL"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Попробовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
