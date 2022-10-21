import React, { useState } from "react";

// This Component is Count up

function AscendingCounter({ processTime, step, end }) {
  let [counterState, setCounterState] = useState(0);

  const time = processTime;

  const firstInterval = setTimeout(counter, time);

  function counter() {
    if (counterState == end) {
      clearTimeout(firstInterval);
    } else {
      counterState += step;
      setCounterState(Number(counterState.toFixed(1)));
    }
  }
  return counterState;
}

export default AscendingCounter;
