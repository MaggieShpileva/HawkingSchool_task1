import React, { FC } from "react";
import { HeadTitle } from "../HeadTitle";
import { store } from "../redux/store";
import styles from "./index.module.scss";

export const ProgressWork: FC = () => {
  return (
    <div className={styles.ProgressWork}>
      <HeadTitle title={store.Titles[0].title} />
      <div className={styles.items}>
        <div className={styles.left_items}>
          <div>
            <span>1</span>
            <p>Рассчёт предварительной заявки</p>
          </div>
          <div>
            <span>2</span>
            <p>Замер объекта нашим инженером</p>
          </div>
          <div>
            <span>3</span>
            <p>
              Составление Коммерческого предложения по изделиям дымохода и
              окончательной сметы на работы{" "}
            </p>
          </div>
        </div>
        <div className={styles.rigth_items}>
          <div>
            <span>4</span>
            <p>Изготовление Дымохода, покраска (если требуется)</p>
          </div>
          <div>
            <span>5</span>
            <p>
              Монтаж продукции, проверка и наладкапробный запуск системы и
              последующая эксплуатация
            </p>
          </div>
          <div>
            <span>6</span>
            <p>Гарантийное обслуживание по соответствующем сроку</p>
          </div>
        </div>
      </div>
    </div>
  );
};
