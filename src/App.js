import "./App.css";
import { useState } from "react";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const moneyPiramid = [
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
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <QuestionBox />
        </div>
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
