import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'




export default function Textform(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)

    }
    
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    
    const handleClearClick = () => {
        let newtext = "";
        setText(newtext)
    }
    
    const handlePuncClick = () => {
        let removedPunc = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
        setText(removedPunc)

    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                    <h2>{props.heading}</h2>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} placeholder='Enter Text Here' rows="8"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handlePuncClick}>Clear "Punctuations"</button>
                    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                    
                <h3>Your text summary</h3>
                {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>Minutes required to read {(text.trim() === '' ? 0 : text.match(/\S+/g).length)*.006}</p>
                <p>Seconds required to read {((text.trim() === '' ? 0 : text.match(/\S+/g).length)*.006)*60}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}



// Textform.propTypes = {
//     heading: PropTypes.string.isRequired
// }
