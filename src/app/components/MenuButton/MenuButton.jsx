"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./MenuButton.module.css";
import { useState } from "react";
import Link from "next/link";

export const MenuButton = () => {
  const [menu, setMenu] = useState(false);
  const [closing, setClosing] = useState(false);

  const openMenu = () => {
    setMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenu(false);
      setClosing(false);
      document.body.style.overflow = "";
    }, 300); 
  };

  return (
    <>
      <button className={styles.menuButton} onClick={openMenu}>
        <MenuIcon fontSize="medium" />
      </button>

      {(menu || closing) && (
        <div className={`${styles.menu} ${closing ? styles.close : styles.open}`}>
          <button className={styles.CloseBtn} onClick={closeMenu}>
            <CloseIcon />
          </button>
          <div className={styles.navigation}>
            <Link href="#numbers" className={styles.navItem} onClick={closeMenu}>Цифры</Link>
            <Link href="#online" className={styles.navItem} onClick={closeMenu}>Сделки онлайн</Link>
            <Link href="#about" className={styles.navItem} onClick={closeMenu}>О компании</Link>
            <Link href="#prices" className={styles.navItem} onClick={closeMenu}>Тарифы</Link>
            <Link href="#faq" className={styles.navItem} onClick={closeMenu}>FAQ</Link>
          </div>
          <div className={styles.authNav}>
            <button className={styles.register}>Регистрация</button>
            <button className={styles.login}>Войти</button>
          </div>
        </div>
      )}
    </>
  );
};
