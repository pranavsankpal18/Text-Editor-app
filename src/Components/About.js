import React from 'react';

function About(props) {


let myStyle ={
    backgroundColor : props.mode==='dark' ? "#042743" : "white",
    color : props.mode=== 'dark' ? "white" : "#042743",
    padding : "10px",
    margin : "10px",  

}



  return (
    <>
    
<div className="container my-3" style={{backgroundColor : props.mode==='dark' ? "#042743" : "white", color: props.mode==='dark'?"white":"#042743"}}>
    <h1 className='my-4'>About Us</h1>
<div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextEditor gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
           TextEditor is a free character counter tool that prvides instant character count & word count statistics for 
           a given text. TextEditor reports the number of words and characters. Thus it is suitable for writing text 
           with word/charcter limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web browsers  such as Chrome, Firefox, Internet Explorer, Safari, Opera. It 
        suits to count characters in facebook, blog, books, excel, document, pdf document, essay, etc.  
      </div>
    </div>
  </div>
</div>

</div>


    </>
  );
}

export default About;
