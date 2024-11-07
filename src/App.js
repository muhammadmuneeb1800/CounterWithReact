import React,{useState} from "react";

function App() {
  const [data,updateData] = useState(0)
  return (
    <div className="App">
      <h1>Counter App Design By M.Muneeb</h1>
      <button id="btn" onClick={() => updateData(data + 1)}>+</button>
      <span>{data}</span>
      <button id="btn" onClick={() => updateData(data - 1)}>-</button>
      <br />
      <button id="bn" onClick={() => updateData(0)}>Reset</button>
    </div>
  );
}

export default App;
