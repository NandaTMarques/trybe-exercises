import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0); // defino o valor inicial no parametro do useState, aqui é 0. 
  // counter é o state(da classe) e setCounter é o setState
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;