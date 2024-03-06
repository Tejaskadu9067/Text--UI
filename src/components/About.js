import React, { useState } from "react"

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [btntext, setBtnText] = useState("Enable dark mode")

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black"
      })
      setBtnText("Enable light mode")
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setBtnText("Enable dark mode");
    }
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Innovation

              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Empowering innovation through technology and creativity.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Excellence

              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Dedicated to delivering excellence with passion and integrity.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Connection
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Committed to building meaningful connections and driving positive change.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <button
            type="button"
            onClick={toggleStyle}
            className="btn btn-primary my-3"
          >{btntext}</button>
        </div>
      </div>
    </>
  );
}
