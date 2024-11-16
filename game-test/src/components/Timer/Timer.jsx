import React, { useState, useEffect } from "react";
import s from "../Timer/Timer.module.css";

const Timer = ({ onTimeUp }) => {
  const timeTest = 20 * 60;
  const [timeLeft, setTimeLeft] = useState(timeTest);
  const [isCritical, setIsCritical] = useState(false); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 30) {
          setIsCritical(true);
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      onTimeUp();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <h2 className={`${isCritical ?  s.critical : s.time}`}>
      Таймер: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
      {timeLeft % 60}
    </h2>
  );
};

export default Timer;


