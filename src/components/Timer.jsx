import {useEffect, useState} from "react";

export default function Timer({ setTimeOut, questionNumber,setStop }) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, setStop]);

    useEffect(() => {
        setTimer(30);
    }, [questionNumber]);
    return timer;
}