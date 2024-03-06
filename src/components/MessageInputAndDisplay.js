import React, { useState } from 'react';

function MessageInputAndDisplay() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };


  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '480px', borderColor:'#b8adad', border:'solid', borderWidth: '4px' }}>
      <h2>Chat UI</h2>
      <div style={{ width: '800px', height: '300px', overflowY: 'scroll', border: '4px', backgroundColor: 'black', color: 'white', padding: '5px', marginBottom: '10px', borderColor: 'white' }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: '600px', height: '50px', marginBottom: '10px', outline: 'none' }}
          placeholder="Enter your message"
        />
        <button className="btn btn-primary my-3 mx-3" type="submit" >Send</button>
        <button className="btn btn-primary my-3 mx-3" type="button" onClick={handleClearMessages} style={{ marginTop: '10px' }}>Clear Messages</button>
      </form>
    </div>
  );
}

export default MessageInputAndDisplay;
