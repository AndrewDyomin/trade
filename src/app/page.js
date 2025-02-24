import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/app/public/logo.png";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { Hero } from "./components/Hero/Hero";
import { Numbers } from "./components/Numbers/Numbers";
import { Online } from "./components/Online/Online";
import { About } from "./components/About/About";
import { Prices } from "./components/Prices/Prices";
import { Faq } from "./components/Faq/Faq";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src={logo} width={110} height={50} alt={"trade blade logo"} />
        <MenuButton />
      </header>
      <main className={styles.main}>
        <Hero />
        <Numbers />
        <Online />
        <About />
        <Prices />
        <Faq />
      </main>
      <footer className={styles.footer}>
        <div className={styles.navArea}>
          <h3 className={styles.navTitle}>Быстрая<br/> навигация</h3>
          <div className={styles.navigation}>
            <Link href='#numbers' className={styles.navItem}>Цифры</Link>
            <Link href='#online' className={styles.navItem}>Сделки онлайн</Link>
            <Link href='#about' className={styles.navItem}>о компании</Link>
            <Link href='#prices' className={styles.navItem}>тарифы</Link>
            <Link href='#faq' className={styles.navItem}>FAQ</Link>
          </div>
        </div>
        <div className={styles.trademarkArea}>
          <Image 
            src={logo}
            width={165}
            height={80}
            alt='TradeBlade logo'
          />
          <p className={styles.trademark}>© 2022 TradeBlade. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
