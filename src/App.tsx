import React, { useEffect, useState } from 'react';
import './App.css' 
import AddMessageForm from './Components/Messages/AddMessageForm/AddMessageForm';
import Messages from './Components/Messages/Messages';
import { Message, SendMessage } from './types';
const url = 'http://146.185.154.90:8000/messages';

function App() {

  const [messages, setMessages] = useState<Message[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(url);
  
      if (request.ok) {
        const arrOf30msg: Message[] = await request.json();
        const newMsgs = arrOf30msg.map (msg => (msg));
        newMsgs.reverse();
        if (newMsgs !== messages) {
          setMessages(newMsgs);
        }
      }
  
    };
    fetchData().catch(console.error);

    const newMessages = () => {
      setInterval(() => {
        fetchData(); 
      }, 5000);
    };

    newMessages();
  }, []);

  const addMessage = (newMessage: SendMessage) => {
    const postData = async () => {
      const data = new URLSearchParams();
      data.set('message', newMessage.message);
      data.set('author', newMessage.author);
  
      const response = await fetch(url, {
      method: 'post',
      body: data,
      })
    };
    postData();
  };

  

  return (
    <div className="App">
      <AddMessageForm onSubmit={addMessage}/>
      <Messages messages={messages}/>
    </div>
  );
}

export default App;
