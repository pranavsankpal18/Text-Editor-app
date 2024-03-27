import React, {useState} from 'react'

function TextForm(props) {

    const onClickHandlerup = () => {
        // console.log("uppercase was clicked :" + text); 
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const onClickHandlerlo = () => {
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const onClickClear = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        // console.log("on change") ;
        setText(event.target.value);
    }

    const [text, setText]  = useState('Enter Your Text');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //right way to change the state
   
  return (
    <>
    <div>
        <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={onClickHandlerup}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={onClickHandlerlo}>Convert to lowercase</button>
      <button className="btn btn-primary" onClick={onClickClear}>Clear</button>
    </div>
    <div className="my-4">
        <h2>Your Text Summary</h2>
        <p><b>{text.split (" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm
