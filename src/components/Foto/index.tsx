import React, { FC } from "react";
import { HeadTitle } from "../HeadTitle";
import { store } from "../redux/store";
import styles from "./index.module.scss";

export const Foto: FC = () => {
  const images = store.Foto;
  const renderImages = () => {
    return images.map((item, index) => {
      return <img src={`${item.img}`} key={`${item.img} - ${index}`} alt="" />;
    });
  };
  return (
    <div className={styles.Foto}>
      <HeadTitle title={store.Titles[3].title} text={store.Titles[3].text} />
      <div className={styles.images}>{renderImages()}</div>
    </div>
  );
};
