import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case button clicked" + text);
        let newUpText = text.toUpperCase();
        setText(newUpText);
    }

    const handleDownClick = () => {
        let newDownText = text.toLowerCase();
        setText(newDownText);
    }

    const handleClear = () => {
        // let newDownText = text.toLowerCase();
        setText("");
    }

    const handleRevClick = () => {
        let newRev = text.split('').reverse().join('')
        setText(newRev);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy = () => {
        let newtext = document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
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
