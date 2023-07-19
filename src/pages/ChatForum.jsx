import React, { useState, useEffect } from 'react';

const ChatForum = () => {
    const initialMessages = [
        { id: 1, sender: 'Alice', text: 'Hello!' },
        { id: 2, sender: 'Bob', text: 'Hi, how are you?' },
      ];
    
      const [messages, setMessages] = useState(() => {
        const storedMessages = localStorage.getItem('chatMessages');
        return storedMessages ? JSON.parse(storedMessages) : initialMessages;
      });
    
      const [newMessage, setNewMessage] = useState('');
    
      useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
      }, [messages]);
    
      const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
      };
    
      const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
    
        const newMessageObj = {
          id: messages.length + 1,
          sender: 'You', // Replace this with the current user's name or ID
          text: newMessage,
        };
    
        setMessages([...messages, newMessageObj]);
        setNewMessage('');
      };

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      };

  return (
    <div className="flex flex-col h-full p-8 bg-primary min-h-[100vh]">
      <div className="flex-1 bg-light p-4  rounded-lg shadow-md overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 rounded-lg ${
              message.sender === 'You' ? 'bg-blue-500 text-white w-[200px] max-w-[50%] mb-2 bg-primary p-4 ml-auto' : 'bg-primary text-white w-[200px] max-w-[50%] mb-2 p-4'
            }`}
          >
            <p className="font-semibold ">{message.sender}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md border border-gray-300 mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-light text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatForum;




