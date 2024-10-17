import React, { useState } from "react";
import s from "../TestSelector/TestSelector.module.css";
import Button from "../UI/Button/Button";
import { questions, medicalQuestions } from "../../data";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { PiTruckTrailerFill } from "react-icons/pi";
import Game from "../Game/Game";

const TestSelector = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  const[nameTest, setNameTest] = useState("");

  const handleSelectTest = (test, testName) => {
    setSelectedTest(test);
    setNameTest(testName);
  };

  const exitTest = () => {
    setSelectedTest(null);
    setNameTest("");
  };

  if (selectedTest) {
    return (
      <Game
        questions={selectedTest === questions ? questions : medicalQuestions} 
        nameTest={selectedTest === questions ? "RGroup Test" : "Medical Tests"}
        exitTest={exitTest}
      />
    );
  }

  return (
    <div className={s.selectedCBtn}>
      <h3>Выберите тему теста</h3>
      <div>
        <Button
          styles={["btnSelectTest"]}
          text={"RGroup Test"}
          onClick={() => handleSelectTest(questions)}
          icon={<PiTruckTrailerFill style={{ fontSize: "24px" }} />}
        />
        <Button
          styles={["btnSelectTest"]}
          text={"Medicine Test"}
          onClick={() => handleSelectTest(medicalQuestions)}
          icon={<FaSuitcaseMedical style={{ fontSize: "22px" }} />}
        />
      </div>
    </div>
  );
};

export default TestSelector;
