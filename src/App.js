import React, { useState } from "react";
import { Chart, Input } from "./components";

function App() {
  const [fcn, setFcn] = useState("arg => arg * 2");
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const runFcn = (strFcn) => {
    const fcn = eval(strFcn);
    if (fcn === '' || typeof fcn != 'function') return [[],[]];
    const labels = [];
    const times = [];
    const results = [];
    for (let i = 0; i < 100; i++) {
      let t1 = performance.now();
      let result = fcn(i);
      let t2 = performance.now();
      labels.push(i);
      times.push(t2 - t1);
      results.push(result);
      if (t2 - t1 > 15) break
    }
    setLabels(labels);
    setData(times);
    setTimeout(() => {
      console.log(labels, times)
    }, 1000);
  };
  // (n) => { for (var i = 0; i < n; i++) { for (var j = 0; j < n; j++) { console.log(i, j); } } }
  return (
    <div>
      <text>Enter your function here:</text>
      <Input runFcn={runFcn} />
      <Chart fcn={fcn} labels={labels} data={data} />
    </div>
  );
}

export default App;