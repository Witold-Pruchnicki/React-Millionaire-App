import { useEffect, useState } from "react";

const QuestionBox = ({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
  setStop,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(answer.correct ? "answer correct" : "answer incorrect")
    );
    delay(6000, () => {
      if (answer.correct) {
          setClassName( "answer correct")
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer()
      } else {
        setStop(true);
      }
    });
    setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer incorrect");
    }, 3000);
  };
  return (
    <div className="questionBox">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : " answer"}
            key={answer.text}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionBox;
