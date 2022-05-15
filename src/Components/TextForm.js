import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case button clicked" + text);
        if(text.length > 0){

            let newUpText = text.toUpperCase();
            setText(newUpText);
            props.showAlert("Converted to UPPER CASE!", "success");
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }
        
    }

    const handleDownClick = () => {
        if(text.length > 0){

            let newDownText = text.toLowerCase();
            setText(newDownText);
            props.showAlert("Converted to lower case!", "success");
            
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    } 

    const handleClear = () => {
        if(text.length > 0){

            // let newDownText = text.toLowerCase();
            setText("");
            props.showAlert("Text Cleared!", "success");
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    }

    const handleRevClick = () => {
        if(text.length > 0){

            let newRev = text.split('').reverse().join('')
            setText(newRev);
            props.showAlert("Text is reversed!", "success");
            
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {

        if(text.length > 0){

            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra speces has been removed!", "success");
           
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    }

    const handleCopy = () => {
        if(text.length > 0){

            let newtext = document.getElementById("myBox");
            newtext.select();
            navigator.clipboard.writeText(newtext.value);
            document.getSelection().removeAllRanges(); 
            props.showAlert("Text has copied to clipboard!", "success");
        
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    }

    const [text, setText] = useState("")


    return (
        <>
            <div className={`text-${props.finalMode === 'light' ? '#212529' : 'light'}`}>
                <br />
                <h1>{props.heading}</h1>
                <div>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'}  my-3 mx-3`} onClick={handleUpClick}> Convert To Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'} my-3 `} onClick={handleDownClick}> Convert To LowerCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'} my-3 mx-3`} onClick={handleRevClick}> Reverse The Input</button>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'} my-3`} onClick={handleClear}> Clear Text </button>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'} my-3 mx-3`} onClick={handleCopy}> Copy Text </button>
                <button disabled={text.length === 0} className={`btn btn-${props.finalMode === 'light' ? 'primary' : 'light'} my-3`} onClick={handleExtraSpaces}> Remove Extra Spaces </button>

            </div>
            <div className={`container my-3 text-${props.finalMode === 'light' ? '#212529' : 'light'}`}>
                <br />
                <hr />
                <h2>Your Text Summary</h2>
                <h6>Your have written <b> {text.split(' ').filter((element)=>{return element.length !==0}).length} </b> words and <b> {text.length}</b> characters.</h6>
                <h6>Estimated Reading Time - {0.008 * text.split(' ').length - 0.008} </h6>
                <br />
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing for preview! "}</p>
            </div>
        </>
    )
}
