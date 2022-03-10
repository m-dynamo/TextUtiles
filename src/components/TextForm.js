import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("uppercase was clicked.")
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showalert("Converted to Upper Case","success")
  }
  const handlelowclick = () => {
    // console.log("uppercase was clicked.")
    let newtext2 = text.toLowerCase()
    setText(newtext2)
    props.showalert("Converted to Lower Case","success")
  }
  const handleOnChange = (event) => {
    // console.log("On changed.")
    setText(event.target.value)
  }
  const [text, setText] = useState();
  // setText('new text');
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'? 'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            defaultValue={""}
            style={{backgroundColor : props.mode === 'dark'? '#343a40':'white',color:props.mode === 'dark'? 'white':'black'}}
          />
        </div>
        <button className="btn btn-success mx-2" onClick={handleupclick}>
          UpperCase
        </button>
        <button className="btn btn-success mx-2" onClick={handlelowclick}>
          LowerCase
        </button>
      </div>
    </>
  )
}
