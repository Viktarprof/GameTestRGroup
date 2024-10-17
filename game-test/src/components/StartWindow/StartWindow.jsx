import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import s from "../StartWindow/StartWindow.module.css";

const StartWindow = ({ startTest, nameTest }) => {
  const [playerName, setPlayerName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleStart = () => {
    if (playerName) {
      startTest(playerName);
    } else {
      setShowError(true);
    }
  };

  const handleInputChange = (e) => {
    setPlayerName(e.target.value); // вводим имя пользователя
    if (e.target.value) {
      setShowError(false); // проверяем если имя есть то ошибка пропадает.
    }
  };

  return (
    <div>
      <h1>{nameTest}</h1>

      {showError && <p className={s.error}>Укажите имя!</p>}

      <Input
        type="text"
        placeholder="Введите ваше имя"
        value={playerName}
        onChange={handleInputChange}
      />

      <Button styles={["btnStart"]} onClick={handleStart} text={"Start"} />
    </div>
  );
};

export default StartWindow;
