import React, { FC } from "react";
import styles from "./index.module.scss";
type Props = {
  title: string;
  text?: string;
};
export const HeadTitle: FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.HeadTitle}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
