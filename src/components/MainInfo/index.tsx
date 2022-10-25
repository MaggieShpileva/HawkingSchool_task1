import React, { FC } from "react";
import { store } from "../redux/store";
import styles from "./index.module.scss";
import image_info from "../../images/image_info.png";
export const MainInfo: FC = () => {
  const titles = store.MainInfo.titles;

  let renderTitle = () => {
    return titles.map((item) => {
      return (
        <div className={styles.items} key={item.title.length}>
          <p>{item.title}</p>
        </div>
      );
    });
  };
  return (
    <div className={styles.MainInfo}>
      <h1>Монтаж дымоходов</h1>
      <div className={styles.menu}>
        <p className={styles.main_page}>Главная</p>
        <p className={styles.finish_page}>Монтаж дымоходов</p>
      </div>
      <div className={styles.text}>
        <p>
          В<span className={styles.name}> Дымоход.ру </span>
          вам помогут как приобрести, так и установить дымоход любой
          конфигурации. В нашем монтажном отделе, состоящим из трёх бригад
          работают квалифицированные специалисты, которые ежегодно проходят
          курсы повышения квалификации. Все работы проводим качественно и
          аккуратно, в короткий срок и на совесть .
        </p>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <h1>Lorem ipsum</h1>
          <div>{renderTitle()}</div>
        </div>
        <img src={image_info} alt="" />
      </div>
    </div>
  );
};
