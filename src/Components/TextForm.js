import React, {useState} from 'react'

function TextForm(props) {

    const onClickHandlerup = () => {
        // console.log("uppercase was clicked :" + text); 
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase !","success");
    }

    const onClickHandlerlo = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase !","success");
    }

    const onClickClear = () => {
        setText('');
        props.showAlert("Text Cleared !","success");
    }

    const onClickCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard !","success");
    }

    const handleExtraSpaces =() =>  {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces !","success");
    }

    const handleOnChange = (event) => {
        // console.log("on change") ;
        setText(event.target.value);
    }

    const [text, setText]  = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //right way to change the state
   
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={onClickHandlerup}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={onClickHandlerlo}>Convert to lowercase</button>
      <button className="btn btn-primary" onClick={onClickClear}>Clear</button>
      <button className="btn btn-primary mx-3" onClick={onClickCopy}>Copy Text</button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split (" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm
