import React, {useState} from 'react'

function TextForm(props) {

    const onClickHandlerup = () => {
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
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard !","success");
    }

    const handleExtraSpaces =() =>  {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces !","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText]  = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //right way to change the state
   
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3 className='mb-4'>{props.heading}</h3>
      <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled = {(text.length === 0)} className="btn btn-primary mx-1 my-1" onClick={onClickHandlerup}>Convert to uppercase</button>
      <button disabled = {(text.length===0)} className="btn btn-primary mx-1 my-1" onClick={onClickHandlerlo}>Convert to lowercase</button>
      <button disabled = {(text.length===0)} className="btn btn-primary mx-1 my-1" onClick={onClickClear}>Clear</button>
      <button disabled = {(text.length===0)} className="btn btn-primary mx-1 my-1" onClick={onClickCopy}>Copy Text</button>
      <button disabled = {(text.length===0)} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split (/\s+/).filter((element) => {return element.length !== 0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}

export default TextForm
