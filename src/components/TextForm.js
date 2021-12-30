import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Changed to Upper Case","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Changed to Lower Case","success");
    }
    const handleLClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        var newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Handled","success");
    }
    const handleSentenceClick = ()=>{
        let newText = "";
        let i=0;
        text.split(".").forEach(element => {
            i++;
            element = element.trim();
            let first_char = element[0].toUpperCase();
            let edited_sentence = first_char + element.slice(1);
            if (i!==1) {
                newText = newText + ". " + edited_sentence;  
            }
            else if(i === text.split(".").length){
                newText = newText + edited_sentence + "."
            }
            else{
                newText = newText + edited_sentence 
            }
        });
        setText(newText);
    }
    // const count_words = (sentance)=>{
    //     let sen = sentance.spilt(" ");
    //     return typeof(sen);
    // }

    const [text, setText] = useState("Enter your text here");

    return (
        <>
        <div className="container" style = {{color: props.mode === "dark"?"white":"#212529"}}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.title}</h1></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode === "light"?"white":"#212529", color: props.mode === "dark"?"white":"#212529"}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Upper case</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Lower case</button>
            <button className="btn btn-primary mx-1" onClick = {handleLClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleSentenceClick}>Sentance Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container">
            <h3>Your text Sumarry</h3>
            {/* <p>{count_words(text)} words and {text.length} characters.</p> */}
            <p>{text.split(" ").length} words and {text.length} characters.</p>
        </div>
        <div className="container">
            <h3>Text Preview</h3>
            <p>{text.length?text:"Enter text in the above text box to preview it here ;)"}</p>
        </div>
        </>
    )
}

TextForm.prototypes = {title: PropTypes.string}
TextForm.defaultProps = {title: "Enter your text below"}
