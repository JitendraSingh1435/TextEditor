// import React, { useState } from 'react'

export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: '#white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#191919'
    //         })
    //         setBtnText("Enable Light code")
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    // let myStyle = {
    //     // color: props.finalMode === 'dark' ? 'white' : '#212529',
    //     // backgroundColor: props.finalMode === 'dark' ? 'white' : '#212529',
    // }

    return (
        <div>
            <div className={`container my-3 text-${props.finalMode === 'light' ? '#212529' : 'light'}`} id="accordionExample" /*style={myStyle}*/>
                <h1>About Us</h1>
                <hr/>
                <div className="accordian-item">
                    <h2 className="accordion-header" id="headingOne">
                        <h5><strong>Analyze Your Here:</strong></h5>
                        <div className="accordion-body" /*style={myStyle}*/>
                            <p style={{ fontSize: "18px", fontStyle: "italic" }}>TextUtil gives you a way to analyze your text quickly and effictly. Be it word count, character count.</p>
                        </div>
                    </h2>
                </div>
                <hr/>


                <div className="accordian-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <h5><strong>Free To Use:</strong></h5>
                        <div className="accordion-body" /*style={myStyle}*/>
                            <p style={{ fontSize: "18px", fontStyle: "italic" }}>TextUtils is a free character counter tool that provide instant character count & word count statistics for a given text. TextUtils reports the number of word and characters. Thus it is suiteable for writing with word/character limit.</p>
                        </div>

                    </h2>
                </div>

                <hr/>
                <div className="accordian-item">
                    <h2 className="accordion-header" id="headingThree">
                        <h5><strong>Brower Compatibility:</strong></h5>
                        <div className="accordion-body" /*style={myStyle}*/>
                            <p style={{ fontSize: "18px", fontStyle: "italic" }}>This word counter software works in any web browser such as Chrome, fireFox, Internet Explorer, and Safari, opera. It suites to count characters in facebook, blog, boks , excel documents, pdfs documents and essays, etc.</p>
                        </div>
                    </h2>
                </div>
            </div>
            {/* <div className="container my-3">

                <button type="button" onClick={toggleStyle} className="btn btn-primary"> {btnText} </button>
            </div> */}
        </div>
    )
}
