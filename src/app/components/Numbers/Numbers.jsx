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
      </div>
    </>
  );
};
