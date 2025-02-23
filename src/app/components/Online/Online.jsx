"use client";

import styles from "./Online.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import transparentLogo from "@/app/public/transparent-logo.png";
import StraightIcon from "@mui/icons-material/Straight";
// import "./styles.css";

export const Online = () => {
  const items = [
    {
      name: "near/usdt",
      activity: "1",
      indicator: "58.6206%",
      target: "Цель 4",
      date: "06.10.2022",
    },
    {
      name: "BTC/USDT",
      activity: "1",
      indicator: "6.02%",
      target: "Цель 3",
      date: "06.10.2022",
    },
    {
      name: "ETH/USDT",
      activity: "1",
      indicator: "16.3%",
      target: "Цель 4",
      date: "06.10.2022",
    },
    {
      name: "NEAR/USDT",
      activity: "1",
      indicator: "0.963%",
      target: "Цель 4",
      date: "06.10.2022",
    },
    {
      name: "NEAR/USDT",
      activity: "1",
      indicator: "58.6206%",
      target: "Цель 4",
      date: "06.10.2022",
    },
  ];

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>Прошедшие сделки</h2>
      <div className={styles.isOnline}>
        <div className={styles.bullet}></div>
        <p className={styles.online}>Онлайн</p>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper slidesPerView={"auto"} spaceBetween={8} className="mySwiper">
          {items.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.slideContent}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.activ}>
                  SPOT · {item.activity} мин. назад
                </p>
                <p className={styles.profit}>Прибыль</p>
                <div className={styles.indicatorArea}>
                  <p className={styles.indicator}>{item.indicator}</p>
                  <StraightIcon fontSize="medium" />
                </div>
                <div className={styles.targetArea}>
                  <p className={styles.target}>{item.target}</p>
                  <p className={styles.date}>Дата входа {item.date}</p>
                </div>
              </div>
              <div className={styles.dealLogo}>
                <Image
                  src={transparentLogo}
                  width={160}
                  height={160}
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.scrollbar}>
            <div className={styles.progress}></div>
        </div>
    </div>
  );
};
