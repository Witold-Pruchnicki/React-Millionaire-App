import { useEffect, useState } from "react";

import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3";
import correct from "../assets/src_sounds_correct.mp3";
import incorrect from "../assets/src_sounds_wrong.mp3";

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
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(incorrect);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

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
    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
          delay(1000,()=>{
              wrongAnswer();
              setStop(true);

          })


      }
    });
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
