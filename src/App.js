import React, { useState, useEffect } from "react";
import { Chart, Input } from "./components";

function App() {
  const [fcn, setFcn] = useState("arg => arg * 2");
  const [labels, setLabels] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [data, setData] = useState([
    0.050000002374872565,
    0.36499999987427145,
    1.0550000006332994,
    2.139999996870756,
    3.2949999877018854,
    4.684999992605299,
    6.689999994705431,
    9.244999993825331,
    11.320000005071051,
    13.724999997066334,
    15.520000000833534,
  ]);
  const [prevFcns, setPrevFcns] = useState([]);

  const runFcn = (strFcn) => {
    const fcn = eval(strFcn);
    if (fcn === "" || typeof fcn != "function") return [[], []];
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
      if (t2 - t1 > 15) break;
    }
    console.log(labels, times);
    setLabels(labels);
    setData(times);
  };

  const clearFcn = () => {
    setFcn('')
    setData([]);
    setLabels([]);
  }

  return (
    <div>
      <Input runFcn={runFcn} setFcn={setFcn} clearFcn={clearFcn} />
      <Chart fcn={fcn} labels={labels} data={data} />
    </div>
  );
}

export default App;

// (n) => { for (var i = 0; i < n; i++) { for (var j = 0; j < n; j++) { console.log(i, j); } } }
