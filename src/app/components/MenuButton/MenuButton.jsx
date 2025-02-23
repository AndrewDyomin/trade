"use client";

import MenuIcon from "@mui/icons-material/Menu";
import styles from "./MenuButton.module.css"

export const MenuButton = () => {
  return (
    <>
      <button className={styles.menuButton}>
        <MenuIcon fontSize="medium" />
      </button>
    </>
  );
};
