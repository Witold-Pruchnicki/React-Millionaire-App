import "./App.css";
import { useEffect, useMemo, useState } from "react";
import QuestionBox from "./components/QuestionBox";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 zł");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPiramid = useMemo(
    () =>
      [
        {
          id: 1,
          amount: "100zł",
        },
        {
          id: 2,
          amount: "200zł",
        },
        {
          id: 3,
          amount: "300zł",
        },
        {
          id: 4,
          amount: "500zł",
        },
        {
          id: 5,
          amount: "1000zł",
        },
        {
          id: 6,
          amount: "2000zł",
        },
        {
          id: 7,
          amount: "4000zł",
        },
        {
          id: 8,
          amount: "8000zł",
        },
        {
          id: 9,
          amount: "16000zł",
        },
        {
          id: 10,
          amount: "32000zł",
        },
        ,
        {
          id: 11,
          amount: "64000zł",
        },
        ,
        {
          id: 12,
          amount: "125000zł",
        },
        ,
        {
          id: 13,
          amount: "250000zł",
        },
        ,
        {
          id: 14,
          amount: "500000zł",
        },
        ,
        {
          id: 15,
          amount: "1000000zł",
        },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPiramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyPiramid, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <QuestionBox
                setStop={setStop}
                data={data}
                setTimeOut={setTimeOut}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPiramid.map((item) => (
            <li
              className={
                questionNumber === item.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
              key={item.id}
            >
              <span className="moneyListItemNumber">{item.id}</span>
              <span className="moneyListItemAmount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
