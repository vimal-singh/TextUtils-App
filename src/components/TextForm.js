import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
  };
  const handleExtraSpace = () => {
    let newtext = text.replace(/  +/g, ' ');
    setText(newtext);
  };
  const handleUpChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(props.heading);
  return (
    <>
      <div className="container md-4">
        <div className="mb-3 my-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          {" "}
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          {" "}
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          {" "}
          Clear Extra Space
        </button>
      </div>
      <div className="container my-3 md-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
