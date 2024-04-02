// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { startStopwatch, stopStopwatch, resetStopwatch, } from './redux/actions';


// export const Stopwatch = () => {
//     // const elapsed = useSelector((state) => state.elapsed)
//     // const running = useSelector((state) => state.running)
//     // const dispatch = useDispatch()

//     // const handleStart = (elapsed) => {
//     //     dispatch(startStopwatch(elapsed))
//     // }

//     // const handleStop = (elapsed) => {
//     //     dispatch(stopStopwatch(elapsed))

//     // }

//     // const handleReset = (elapsed) => {
//     //     dispatch(resetStopwatch(elapsed))
//     // }

//     return (
//         <>
//             {/* <div>Stopwatch</div>
//             <div className="timer">
//                 <span className="digits">
//                     {("0" + Math.floor((state.elapsed / 60000) % 60)).slice(-2)}:
//                 </span>
//                 <span className="digits">
//                     {("0" + Math.floor((state.elapsed / 1000) % 60)).slice(-2)}.
//                 </span>
//                 <span className="digits mili-sec">
//                     {("0" + ((state.elapsed / 10) % 100)).slice(-2)}
//                 </span>
//             </div>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//             <button onClick={handleReset}>Reset</button> */}
//             <h1>HELLO</h1>
//         </>
//     )
// }

import React, { useState, useEffect } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTimeUnit = (unit) => {
        return unit.toString().padStart(2, "0");
    };

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
        <div className="stopwatch-container">
            <p className="stopwatch-time">
                {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
                {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
            </p>
            <div className="stopwatch-buttons">
                <button className="stopwatch-button" onClick={toggleRunning}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className="stopwatch-button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;

