import React from "react";
import s from "../ResultWindow/ResultWindow.module.css";
import Button from "../UI/Button/Button";
import { FaRedo } from "react-icons/fa";

const ResultWindow = ({
  userList,
  playerName,
  correct,
  total,
  percentResult,
  onRestart,
}) => {

  const sortedUserList = userList.sort((a, b) => b.percentResult - a.percentResult);

  return (
    <div className={s.resultContainer}>
      <h2>{playerName.charAt(0).toUpperCase() + playerName.slice(1)} тест завершен</h2>
      <p>
        Вы набрали {correct} из {total} вопросов. ({percentResult}% правильных
        ответов)
      </p>

      <Button
        styles={"btnRestart"}
        onClick={onRestart}
        text={"Повторить тест"}
        icon={<FaRedo />}
      />

      <h3>Рейтинг:</h3>
      <div className={s.rait}>
        {sortedUserList.map((user, index) => (
          <div key={user.id}>
            <p>
              {index + 1}. {user.playerName.charAt(0).toUpperCase() + user.playerName.slice(1)}: {user.correct}/{user.total} (
              {user.percentResult}%)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultWindow;

