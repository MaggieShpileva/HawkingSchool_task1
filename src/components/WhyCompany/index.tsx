import React, { FC } from "react";
import styles from "./index.module.scss";
import icon_1 from "../../images/icons/guarantee.svg";
import icon_2 from "../../images/icons/architect.svg";
import icon_3 from "../../images/icons/review.svg";
import { HeadTitle } from "../HeadTitle";
import { store } from "../redux/store";

export const WhyCompany: FC = () => {
  return (
    <div className={styles.WhyCompany}>
      <HeadTitle title={store.Titles[1].title} text={store.Titles[1].text} />

      <div className={styles.description}>
        <div>
          <img src={icon_1} alt="" />
          <h2>Большой гарантийный срок</h2>
          <p>
            Крепёж, стыковка элементов – <span>10 лет</span>
          </p>
          <p>
            Сквозная коррозия труб – <span>5 лет</span>
          </p>
          <p>
            Гидроизоляция – <span> 3 года</span>
          </p>
        </div>

        <div>
          <img src={icon_2} alt="" />
          <h2>Помощь в покупке агрегата </h2>
          <p>
            (печи, камина, котла), а также качественной установке на объекте с
            последующим гарантийным сервисом
          </p>
        </div>

        <div>
          <img src={icon_3} alt="" />
          <h2>Реальные отзывы клиентов</h2>
          <p>
            Убедитесь в добросовестности исполнения, прочитав Отзывы клиентов в
            специальном разделе.
          </p>
        </div>
      </div>
    </div>
  );
};
