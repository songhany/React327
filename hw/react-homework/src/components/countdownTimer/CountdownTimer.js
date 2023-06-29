import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  function minusSeconds() {
    if (isRunning) {  // if timer is running, do nothing
      return;
    }

    const id = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            clearInterval(id);  // Stop the interval when the timer reaches 0
            return 0;
          } else {
            setMinutes(prevMinutes => prevMinutes - 1);
            return 59;
          }
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    setIntervalId(id);  // store its ID in state
    setIsRunning(true);
  }

  function stopTimer() {
    if (isRunning) {  // Timer is currently running, pause it
      clearInterval(intervalId);
      setIsRunning(false);
    } else {  // Timer is currently paused, resume it
      minusSeconds();
    }
  }

  function resetTimer() {
    setMinutes(0);
    setSeconds(0);
    clearInterval(intervalId);
    setIntervalId(null);
    setIsRunning(false);
  }

  function handleMinutesChange(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setMinutes(value);
    }
  }

  function handleSecondsChange(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSeconds(value);
      if (isRunning) {  // only after startTimer(), we start to update the minutes
        const totalSeconds = value + minutes * 60;
        setMinutes(Math.floor(totalSeconds / 60));
      }
    }
  }

  function getTotalSeconds() {
    return minutes * 60 + seconds;
  }

  return (
    <>
      <div>Timer</div>
      <input
        value={minutes} // Display the total minutes
        onChange={handleMinutesChange}
        name='minutes'
      />
      <label for='minutes'>Minutes</label>
      <input
        value={seconds}
        onChange={handleSecondsChange}
        name='seconds'
      />
      <label for='seconds'>Seconds</label>
      <button onClick={minusSeconds}>START</button>
      <button onClick={stopTimer}>PAUSE/RESUME</button>
      <button onClick={resetTimer}>RESET</button>

      {/* <div>
        <h1>{Math.floor(getTotalSeconds() / 60) < 10 ? `0${minutes}` : minutes} : {getTotalSeconds() < 10 ? `0${seconds}` : seconds}</h1>
      </div>    */}
      <div>
        <h1>{Math.floor(getTotalSeconds() / 60).toString().padStart(2, '0')} : {(getTotalSeconds() % 60).toString().padStart(2, '0')}</h1>
      </div>    
    </>
  )
}