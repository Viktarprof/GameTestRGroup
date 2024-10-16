import React, { useState, useEffect } from "react";
import s from "../Game/Game.module.css";
import ResultWindow from "../ResultWindow/ResultWindow";
import TestWindow from "../TestWindow/TestWindow";
import StartWindow from "../StartWindow/StartWindow";
import Button from "../UI/Button/Button";

const Game = () => {
  const [playerName, setPlayerName] = useState("");
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [results, setResults] = useState(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const savedUserList = localStorage.getItem("userList");
    if (savedUserList) {
      setUserList(JSON.parse(savedUserList));
    }
  }, []);

  const startTest = (name) => {
    setPlayerName(name);
    setIsTestStarted(true);
    setResults(null);
  };

  const finishTest = (score, totalQuestions) => {
    const percentResult = ((score / totalQuestions) * 100).toFixed(1);

    const newResults = {
      id: userList.length + 1,
      playerName,
      correct: score, // Количество правильных ответов
      total: totalQuestions, // Общее количество вопросов
      percentResult,
    };

    const updatedUserList = [...userList, newResults];
    localStorage.setItem("userList", JSON.stringify(updatedUserList));

    setUserList(updatedUserList);
    setResults(newResults);
    setIsTestStarted(false);
  };

  const retryTest = () => {
    setPlayerName("");
    setResults(null);
    setIsTestStarted(false);
  };

  return (
    <div className={s.gameContainer}>
      <div className={s.btnsContainer}>
        <div className={s.tooltip}>
          <Button styles={["btnClose"]} />
          <span className={s.tooltipText}>Закрыть</span>
        </div>

        <div className={s.tooltip}>
          <Button styles={["btnHide"]} />
          <span className={s.tooltipText}>Скрыть</span>
        </div>

        <div className={s.tooltip}>
          <Button styles={["btnGreen"]} />
          <span className={s.tooltipText}>На весь экран</span>
        </div>
      </div>

      <div className={s.game_window}>
        {!isTestStarted && !results && <StartWindow startTest={startTest} />}
        {isTestStarted && <TestWindow finishTest={finishTest} />}
        {results && (
          <ResultWindow
            {...results}
            onRestart={retryTest}
            userList={userList}
          />
        )}
      </div>
    </div>
  );
};

export default Game;
