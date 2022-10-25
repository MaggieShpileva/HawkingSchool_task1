import React, { createRef, FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import mainLogo from "../../images/Logo.png";
import logo_search from "../../images/icons/search.png";
import logo_like from "../../images/icons/like.png";
import logo_shopping_cart from "../../images/icons/shopping-cart.png";
import { Menu } from "../Menu";
import { store } from "../redux/store";
import { Icons } from "../Icons";

export type Props = {
  size?: {
    height: number;
    width: number;
  };
  neededSize: boolean;
};
export const Header: FC<Props> = ({ neededSize, size }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleCountChange = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <img src={mainLogo} alt="" />
      </div>
      <div className={styles.main}>
        <div
          className={styles.main_burger_menu}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className={styles.burger_menu}></div>
        </div>

        <div className={styles.main_title}>
          <a href="#">каталог товаров</a>
          <a href="#">доставка и оптала</a>
          <a href="#">цены</a>
          <a href="#">контакты</a>
        </div>

        <div className={styles.menu}>
          <div className={styles.p_number}>
            <p className={styles.part_1}>+7 (812) </p>
            <p className={styles.part_2}> 509 21 98</p>
          </div>

          <p className={styles.p_call}>перезвоните мне</p>
          <Icons
            icons={store.IconsDiv}
            count={count}
            handleCountChange={handleCountChange}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.btn} id={styles.un_visible}>
            <img src={logo_search} alt="" />
          </div>
          <div className={styles.btn} id={styles.visible}>
            <img src={logo_like} alt="" />
            {count > 0 && (
              <div className={styles.count_styles}>
                <p>{count}</p>
              </div>
            )}
          </div>
          <div className={styles.btn} id={styles.un_visible}>
            <img src={logo_shopping_cart} alt="" />
          </div>
        </div>
      </div>
      <Menu active={menuActive} neededSize={neededSize} size={size} />
    </div>
  );
};
