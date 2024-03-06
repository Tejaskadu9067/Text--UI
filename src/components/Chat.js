import React, { useState } from 'react';

export default function Chat(props) {
    const [chat, setChat] = useState("");
    const [preview, setPreview] = useState("");
    
    
    const replies = {
        "hello": "Hello there!",
        "Good morning": "Good morning!",
        "Good night": "Good night!",
        "what are you doing": "Studying!",
        "where are you": "Home",
        
               
    };

    const handleOnChange = (event) => {
        setChat(event.target.value);
    };

    const handleChat = () => {
        
        if (replies.hasOwnProperty(chat)) {
           
            setPreview(replies[chat]);
        } else {
            
            setPreview("Invalid command");
        }
    };

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Message</h2>
            <textarea value={chat} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" onClick={handleChat} className="btn btn-primary my-3">Send</button>
            <p><h3>Preview</h3></p>
            <p>{preview}</p>
        </div>
    );
}
