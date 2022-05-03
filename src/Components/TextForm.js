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
            props.showAlert("Text has copied to clipboard!", "success");
        
        }else{
            props.showAlert("Please enter something. Text box is empty!", "warning");

        }

    }

    const [text, setText] = useState("")


    return (
        <>
            <div className={`text-${props.mode === 'light' ? '#212529' : 'light'}`}>
                <br />
                <h3>{props.heading}</h3>
                <div>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}> Convert To LowerCase</button>
                <button className="btn btn-primary my-3" onClick={handleRevClick}> Reverse The Input</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClear}> Clear Text </button>
                <button className="btn btn-primary my-3" onClick={handleCopy}> Copy Text </button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? '#212529' : 'light'}`}>
                <br />
                <hr />
                <h2>Your Text Summary</h2>
                <p>Your have written <b> {text.split(' ').length - 1} </b> words and <b> {text.length}</b> characters.</p>
                <p>Estimated Reading Time - {0.008 * text.split(' ').length - 0.008} </p>
                <br />
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above for preview. "}</p>
            </div>
        </>
    )
}
