import React, { FC } from "react";
import styles from "./index.module.scss";
import logo_vk from "../../images/vk_logo.png";
import logo_telegram from "../../images/telegrem_logo.png";
import logo_instagram from "../../images/instagram_logo.png";
import logo_wa from "../../images/wa_logo.png";
import logo_search from "../../images/search.png";
import logo_like from "../../images/like.png";
import logo_shopping_cart from "../../images/shopping-cart.png";
import { store } from "../redux/store";
import { Icons } from "../Icons";

type Props = {
  active: boolean;
  neededSize: boolean;
  size?: {
    height: number;
    width: number;
  };
};
export const Menu: FC<Props> = ({ active, neededSize, size }) => {
  return (
    <div
      className={
        (active && neededSize) || (active && size!.width <= 720)
          ? styles.menu_active
          : styles.menu_not_active
      }
    >
      <div className={styles.main_menu}>
        <div className={styles.main_title}>
          <a href="#">каталог товаров</a>
          <a href="#">доставка и оплата</a>
          <a href="#">цены</a>
          <a href="#">контакты</a>
        </div>
        <div className={styles.contacts}>
          <div className={styles.menu}>
            <p className={styles.p_call}>перезвоните мне</p>

            <div className={styles.p_number}>
              <p className={styles.part_1}>+7 (812) </p>
              <p className={styles.part_2}> 509 21 98</p>
            </div>
          </div>
          {/* <Icons icons={store.IconsDiv} /> */}
        </div>
      </div>
    </div>
  );
};
