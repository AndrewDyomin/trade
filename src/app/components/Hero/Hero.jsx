import Image from "next/image"
import styles from "./Hero.module.css"
import heroImage from "@/app/public/hero-image.png"

export const Hero = () => {
    return(
        <div className={styles.section}>
            <div className={styles.imageArea}>
                <Image 
                    src={heroImage}
                    width={300}
                    height={134}
                    alt="short to short"
                />
            </div>
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