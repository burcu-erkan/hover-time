import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  let [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <div
        className="box"
        onMouseEnter={() => setTimerOn(true)}
        onMouseLeave={() => setTimerOn(false)}
      >
        Hover over me to see your hover time
        <h3>in real time!</h3>
      </div>
      <div>Total Hover Time: {time}ms</div>
    </div>
  );
}
export default App;
