import React, { FC } from "react";
import { FooterDiv } from "../FooterDiv";
import { store } from "../redux/store";
import styles from "./index.module.scss";

export const Footer: FC = () => {
  const renderIcons = () => {
    return store.IconsDiv.map((item, index) => {
      return <img src={item.logo} key={`${item.logo}-${index}`} alt="" />;
    });
  };
  return (
    <div className={styles.Footer}>
      <div className={styles.main_div}>
        <FooterDiv
          title={store.Footer[0].title}
          items={store.Footer[0].items}
        />
        <FooterDiv
          title={store.Footer[1].title}
          items={store.Footer[1].items}
        />
        <div className={styles.work_time}>
          <h1>ВРЕМЯ РАБОТЫ</h1>
          <p className={styles.time}>
            <span>пн-пт </span> 9:00 – 20:00
            <span> сб-вс </span>
            10:00 – 18:00
          </p>
          <p className={styles.address}>
            г. Санкт - Петербург, ул. Тамбасова д.7
          </p>
        </div>
      </div>
      <div className={styles.icons}>{renderIcons()}</div>
    </div>
  );
};
