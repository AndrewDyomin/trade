import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/app/public/logo.png";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { Hero } from "./components/Hero/Hero";
import { Numbers } from "./components/Numbers/Numbers";
import { Online } from "./components/Online/Online";

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
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
