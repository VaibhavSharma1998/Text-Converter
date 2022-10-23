import React,{useState} from 'react'


export default function TexthtmlForm(props) {
  let handleUpClick =()=>{
   
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","Success")
  }

  let handleLowerClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","Success")
  }

  let handleOnChange =(event)=>{

    setText(event.target.value)
    
  }
  let handleClearClick=()=>{
    let newText = "" 
    setText(newText)
    props.showAlert("Text Cleared.","Success")
  }

  

  let handleFistLetterCapital =()=>{
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
      
    }
    let latestText = newText.join(" ");
    setText(latestText)
    props.showAlert("Firstletter is changed.","Success")
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'rgb(35, 39, 47)'}}>
  <h1 className='mb-2'>{props.heading}</h1><br></br>
  <p>Simply enter your text and choose the case you want to convert it to.</p>
<div className="mb-3">
   <textarea className="form-control" id="myBox my-3" style={{backgroundColor:props.mode==='dark'?'rgb(52 58 70)':'white',color:props.mode==='dark'?'white':'#040448'}} value={text}  onChange={handleOnChange} rows="8"  ></textarea>
</div>
<button  className='btn btn-primary mx-2` my-1 ' disabled={text.length===0}  onClick={handleUpClick}>Convert to Uppercase</button>
<button  className='btn btn-primary mx-2 my-1' disabled={text.length===0}  onClick={handleLowerClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2 my-1'  disabled={text.length===0} onClick={handleFistLetterCapital}>First  Letter Capital</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'rgb(35, 39, 47)'}}>
      <h1>Your Text summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}