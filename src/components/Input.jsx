import React, { useState } from "react";

const Input = props => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    props.runFcn(value)
    props.setFcn(value)
  }

  const handleClear = () => {
    setValue("")
  }
  return (
    <div>
      <p>Enter your function here:</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          name="name"
          style={{ width: "300px", height: "100px" }}
        />
        {/* <div> */}
          <button type="submit" className="run">
            <span>Submit</span>
          </button>
          <button onClick={handleClear}>
            Clear
          </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default Input;