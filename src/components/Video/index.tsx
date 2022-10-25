import React, { FC } from "react";
import { HeadTitle } from "../HeadTitle";
import { store } from "../redux/store";
import styles from "./index.module.scss";

export const Video: FC = () => {
  return (
    <div className={styles.Video}>
      <HeadTitle title={store.Titles[2].title} text={store.Titles[2].text} />
      <div className={styles.main_video}>
        <div className={styles.backVideo}>
          <div className={styles.div_first}></div>
          <div className={styles.div_second}></div>
        </div>
        <iframe
          width="771"
          height="438"
          src="https://www.youtube.com/embed/36YnV9STBqc"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
