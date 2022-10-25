import img_foto_1 from "../../images/div_foto/1.png";
import img_foto_2 from "../../images/div_foto/2.png";
import img_foto_3 from "../../images/div_foto/3.png";
import img_foto_4 from "../../images/div_foto/4.png";
import img_foto_5 from "../../images/div_foto/5.png";
import img_foto_6 from "../../images/div_foto/6.png";
import img_foto_7 from "../../images/div_foto/7.png";
import img_foto_8 from "../../images/div_foto/8.png";

import logo_wa from "../../images/icons/wa_logo.png";
import logo_vk from "../../images/icons/vk_logo.png";
import logo_instagram from "../../images/icons/instagram_logo.png";
import logo_telegram from "../../images/icons/telegrem_logo.png";

type TitleMainInfo = { title: string };

type Store = {
  MainInfo: { titles: TitleMainInfo[] };
  Titles: { title: string; text: string }[];
  Foto: { img: string }[];
  Footer: { title: string; items: string[] }[];
  IconsDiv: { logo: string }[];
  DataPerson: {
    name: string;
    phone: string;
  }[];
};
export let store: Store = {
  MainInfo: {
    titles: [
      { title: "Доступные цены" },
      { title: "Собственное производсвто Дымоходов" },
      {
        title:
          "Выполнение необходимых работ, связанных с установкой камина, печи, котла",
      },
      { title: "Гарантия (от трёх до десяти лет)" },
      {
        title: "Работаем чисто, аккуратно, убираем за собой, не сквернословим",
      },
      { title: "Только русские квалифицированные специалисты" },
      { title: "Устанавливаем любые дымоходы всех производителей" },
    ],
  },
  Titles: [
    { title: "Процесс выполнения монтажа", text: "" },
    {
      title: "Почему Дымоход.ру?",
      text: "В отличие от других производителей, мы ручаемся за качество продукции, т.к. все Дымоходы изготавливаются из качественной стали, проверенного теплоизолятора, по современной технологии плазменной сварки «встык» ",
    },
    {
      title: "Видео об установке",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Фото выполненных работ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  Foto: [
    { img: img_foto_1 },
    { img: img_foto_2 },
    { img: img_foto_3 },
    { img: img_foto_4 },
    { img: img_foto_5 },
    { img: img_foto_6 },
    { img: img_foto_7 },
    { img: img_foto_8 },
  ],
  Footer: [
    {
      title: "КАТАЛОГ",
      items: [
        "Дымоходы",
        "Дымососы",
        "Печи для дома",
        "Печи для бани",
        "Силикат кальция",
        "Камины",
        "Котлы",
        "Ещё",
      ],
    },
    {
      title: "ИНФОРМАЦИЯ",
      items: [
        "Каталог",
        "Установка и монтаж",
        "Отзывы",
        "Ликвидация товара",
        "Полезное",
        "Контакты",
        "Оплата и доставка",
      ],
    },
  ],
  IconsDiv: [
    { logo: logo_vk },
    { logo: logo_telegram },
    { logo: logo_instagram },
    { logo: logo_wa },
  ],
  DataPerson: [{ name: "123", phone: "123" }],
};
