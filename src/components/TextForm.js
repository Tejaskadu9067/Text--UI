import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text cleared", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces removed", "success")
  };
  
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3" >
          <h1>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'#042743':'white'}} onChange={handleOnChange}  value={text} id="Box" rows="8"></textarea>
        </div>

        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Convert to Lower case
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleExtraSpaces}
        >
         Remove extra spaces
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s/).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box"}</p>
      </div>
    </>
  );
}
