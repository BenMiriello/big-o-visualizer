import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const Input = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.runFcn(value);
    props.setFcn(value);
  };

  const handleClear = () => {
    setValue("");
  };
  return (
    <div style={{
      margin: '20px'
    }}>
      <p>Enter your function here:</p>
      <form onSubmit={handleSubmit}>
        <div style={{
          margin:'2px',
          width:'80%',
          borderStyle:'solid',
          borderWidth:'2px',
          borderColor:'grey'
        }}>
          <Editor
            value={value}
            onValueChange={(code) => setValue(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <button type="submit" className="run">
          <span>Submit</span>
        </button>
        <button
          onClick={handleClear}
          className="run"
          style={{
            backgroundColor: "white",
            color: "grey",
            borderWidth: "1px",
            borderColor: "grey",
          }}
        >
          Clear
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Input;

const f = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
};
