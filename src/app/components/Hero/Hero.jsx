import styles from "./Hero.module.css"

export const Hero = () => {
    return(
        <div className={styles.section}>
            <div className={styles.imageArea}></div>
            <div>
                <h1 className={styles.title}>моментально Копируй сделки профи трейдеров</h1>
                <p className={styles.description}>Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
            </div>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="ВАШ E-MAIL"
                />
                <button 
                    className={styles.button}
                    type="submit"
                >начать</button>
            </form>
            <p className={styles.offer}>5 дней бесплатного пользования</p>
        </div>
    )
}