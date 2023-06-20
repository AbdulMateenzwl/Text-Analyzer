import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = (event) => {
        setText(text.toUpperCase())
    }
    
    const handleDownClick = (event) => {
        setText(text.toLowerCase())
    }

    const [text, setText] = useState('')

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        </>
    )
}
