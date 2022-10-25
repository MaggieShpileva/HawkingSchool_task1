import React, { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  items?: string[];
};
export const FooterDiv: FC<Props> = ({ title, items }) => {
  const renderItems = () => {
    return items?.map((item) => {
      return <p key={`${item}`}>{item}</p>;
    });
  };
  return (
    <div className={styles.FooterDiv}>
      <h1>{title}</h1>
      <div className={styles.render_items}>{renderItems()}</div>
    </div>
  );
};
