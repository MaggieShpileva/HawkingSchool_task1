import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import logo_vk from "../../images/icons/vk.png";
import logo_telegram from "../../images/icons/telegram.png";
import logo_instagram from "../../images/icons/instagram.png";
import logo_wa from "../../images/icons/whatsapp.png";

import PhoneInput from "react-phone-input-2";
import "./PhoneInput.css";
import { store } from "../redux/store";
import { render } from "@testing-library/react";

export const Consultation: FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  let repeatData: boolean = false;
  const [success, setSuccess] = useState<boolean>(false);
  const [noSuccess, setNoSuccess] = useState<boolean>(false);

  const getDataPerson = () => {
    store.DataPerson.map((item) => {
      if (item.name === name && item.phone === phone) {
        repeatData = true;
      }
    });

    if (repeatData) {
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 8000);
    } else {
      store.DataPerson.push({ name, phone });
      setSuccess(true);
      setName("");
      setPhone("");
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };
  return (
    <div className={styles.Consultation}>
      <h1>необходима консультация?</h1>
      <h3>оставьте заявку или свяжитесь с нами в социальных сетях</h3>

      <div className={styles.icons}>
        <img src={logo_vk} alt="" />
        <img src={logo_telegram} alt="" />
        <img src={logo_instagram} alt="" />
        <img src={logo_wa} alt="" />
      </div>
      <div className={styles.form}>
        <h2>
          Для <span>консультации</span> заполните форму!
        </h2>
        <p>С Вами свяжутся в ближайшее время</p>
        <div className={styles.inputs}>
          <input
            type="text"
            value={name}
            placeholder="Ваше имя"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
          <PhoneInput
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
            }}
          />

          <button onClick={() => getDataPerson()}>Отправить</button>
        </div>
        {success && (
          <div className={styles.successForm}>
            <h1>Заявка успешно отправлена!</h1>
          </div>
        )}
        {noSuccess && (
          <div className={styles.no_success}>
            <p>Вы уже заполняли форму!</p>
          </div>
        )}
      </div>
    </div>
  );
};
