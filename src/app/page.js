import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/app/public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { Hero } from "./components/Hero/Hero";
import { Numbers } from "./components/Numbers/Numbers";

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
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
