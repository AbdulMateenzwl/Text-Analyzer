import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnReplaceChange = (event) => {
        setReplaceText(event.target.value);
    }

    const handleOnFindChange = (event) => {
        setFindText(event.target.value);
    }

    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }

    const handleDownClick = (event) => {
        setText(text.toLowerCase());
    }

    const handleCopyClick = (event) => {
        navigator.clipboard.writeText(text);
        let copyBtn = document.getElementById('copy-btn');
        copyBtn.innerHTML = 'Copied!'
        copyBtn.classList.add('btn-success');

        setTimeout(() => {
            copyBtn.innerHTML = 'Copy Text';
            copyBtn.classList.remove('btn-success');
        }, 1000);
    }

    const handleClearClick = (event) => {
        setText('');
    }

    const [text, setText] = useState('');
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');


    // function to count words in string
    function countWords() {
        let count = text.trim().split(/\s+/).length;
        if (text === '') {
            count = 0;
        }
        return count;
    }

    function ReplaceAllTextfunction() {
        setText(text.replaceAll(findText, replaceText));
        ClearReplaceInputFields();        
    }

    function ClearReplaceInputFields(){
        setFindText('');
        setReplaceText('');
    }

    function ReplaceOneTextfunction() {
        setText(text.replace(findText, replaceText));
        ClearReplaceInputFields();
    }

    return (
        <React.Fragment>
            <div className='container '>
                <h1>{props.heading}</h1>
                <div className="">
                    <textarea className="form-control my-2" id='text-area' placeholder='Enter text here' value={text} onChange={handleOnChange} rows="15"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Replace Text</button>
                <button className="btn btn-primary mx-1 my-1" id='copy-btn' onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Text Summary </h2>
                <p>{countWords()} words</p>
                <p> Characters ( with spaces ) : {text.length}</p>
                <p> Characters ( with spaces ) : {text.replace(/\s/g, '').length}</p>
                <p> Time to Read : {Math.floor(0.008 * countWords())} minutes {Math.floor((0.008 * countWords() * 60 ) % 60)} seconds</p>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <input type="text" value={findText} onChange={handleOnFindChange} className='mx-1 my-1' placeholder='Find' />
                        <input type="text" value={replaceText} onChange={handleOnReplaceChange} className='mx-1 my-1' placeholder='Replace' />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ReplaceOneTextfunction} >Replace Once</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ReplaceAllTextfunction} >Replace All</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
