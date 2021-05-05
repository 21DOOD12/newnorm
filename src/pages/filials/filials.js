import React from "react";
import "./index.css";
import "./media.css";

import { Link } from "react-router-dom";

const Filials = () => {
  return (
      <div className="filials">
        <span className="containerForLinks">
          <Link to="#">
            <div className="link">о нас</div>
          </Link>
          <Link to="#">
            <div className="link">адресс</div>
          </Link>
          <Link to="#">
            <div className="link">контакты</div>
          </Link>
        </span>
        <div className="containerForInfo">
          <span className="tittle">Ош</span>
          <span className="text">
            Ош являлся одним из религиозных мусульманских центров Средней Азии.
            Наиболее известен древними мечетями в центре города, а также горой
            Сулайман-Тоо (Тахт-и-Сулайман, Трон Соломона)[11], являющейся
            традиционным местом паломничества
          </span>
          <span className="text">
            Город расположен в предгорном оазисе. Поселение земледельцев эпохи
            бронзы было обнаружено на южном склоне горы Сулайман-Тоо. Ош
            является одним из старейших селений Киргизии. Ныне официально
            предложено считать, что история города насчитывает около 3000
            лет[13][14]. Однако в исторической науке принято вести отсчёт
            возраста города от самого раннего упоминания в исторических актах,
            которое в летописях относится к IX веку н. э., что всё равно
            позволяет считать его старейшим городом страны.
          </span>
        </div>
        <div className="containerForFilials">
          <Link to="#">
            <div className="filialLinksOsh">Ош</div>
          </Link>
          <Link to="#">
            <div className="filialLinksTalas">Талас</div>
          </Link>
          <Link to="#">
            <div className="filialLinksBatken">Баткен</div>
          </Link>
          <Link to="#">
            <div className="filialLinksIssykKul">Ыссык-Куль</div>
          </Link>
          <Link to="#">
            <div className="filialLinksJalalAdad">Джалал-Абад</div>
          </Link>
          <Link to="#">
            <div className="filialLinksNaryn">Нарын</div>
          </Link>
        </div>
      </div>
  );
};
export default Filials;
