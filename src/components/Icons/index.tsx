import { render } from "@testing-library/react";
import React, { FC, useState } from "react";
import { store } from "../redux/store";
import styles from "./index.module.scss";
type Props = {
  icons: { logo: string }[];
  count: number;
  handleCountChange: () => void;
};

export const Icons: FC<Props> = ({ icons, count, handleCountChange }) => {
  const RenderIcons = () => {
    return icons.map((item, index) => {
      return (
        <div key={`${item.logo} - ${index}`} onClick={handleCountChange}>
          <img src={item.logo} alt="" />
        </div>
      );
    });
  };
  return <div className={styles.icons}>{RenderIcons()}</div>;
};
