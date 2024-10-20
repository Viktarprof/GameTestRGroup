import React, { useState } from "react";
import s from "../TestWindow/TestWindow.module.css";
import Button from "../UI/Button/Button";
import Timer from "../Timer/Timer";

const TestWindow = ({ questions, finishTest}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // текущий вопрос
  const [score, setScore] = useState(0); //  результаты
  const [isFinished, setIsFinished] = useState(false); // Завершение теста
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Выбранные ответы для текущего вопроса
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Массив отвеченных вопросов

  const handleAnswerSelection = (selectedOption) => {
    // выбор ответа
    setSelectedAnswers((prev) => {
      if (prev.includes(selectedOption)) {
        return prev.filter((id) => id !== selectedOption);
      }
      return [...prev, selectedOption];
    });
  };

  const nextQuestion = () => {
    // след вопрос
    if (currentQuestion < questions.length - 1) {
      // если это не последний вопрос, то переход
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true); // если последний. то завершаем тест
    }
    setSelectedAnswers([]);
  };

  const handleConfirmAnswer = () => {
    const correctAnswers = questions[currentQuestion].isCorrect; // Получаем правильные ответы из текущего вопроса.
    const allCorrect = selectedAnswers.every(
      (answer) => correctAnswers.includes(answer) // Проверяем, все ли выбранные ответы правильные
    );

    if (!answeredQuestions.includes(currentQuestion)) {
      if (allCorrect && selectedAnswers.length === correctAnswers.length) {
        setScore((prev) => prev + 1);
      }

      setAnsweredQuestions((prev) => [...prev, currentQuestion]); //Добавляем вопрос в список отвеченных, чтобы не засчитывать повторно
    }
    nextQuestion();
  };

  const handleTimeUp = () => {
    setIsFinished(true);
  };
  if (isFinished) {
    finishTest(score, questions.length); // Передаём счёт и общее количество вопросов
    return null;
  }

  return (
    <div className={s.testWindow}>
      <Timer onTimeUp={handleTimeUp} />
      <h4 className={s.question}>
        {questions[currentQuestion].id}) {questions[currentQuestion].question}
      </h4>
      <div className={s.answers}>
        {questions[currentQuestion].options.map((option) => (
          <Button
            key={option.id}
            text={option.text}
            styles={`${
              selectedAnswers.includes(option.id)
                ? "btnAnswerSelect"
                : "btnAnswer"
            }`}
            onClick={() => handleAnswerSelection(option.id)}
          />
        ))}
      </div>

      <div className={s.actionButtonsWrapper}>
        <div className={s.tooltipWrapper}>
          <Button
            styles={"btnSelect"}
            text={"Принять ответ"}
            onClick={handleConfirmAnswer}
          />
          {selectedAnswers.length === 0 && (
            <span className={s.tooltipText}>Выберите вариант ответа</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestWindow;
