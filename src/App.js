import {useEffect,useState}  from 'react'
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from './axios';


function App() {

  const [messages ,setMessages] = useState([]);

  useEffect(()=>{
      axios.get('/messages/sync').then(response => {
        console.log(response.data);
        setMessages(response.data);
      });
  
  },[])
 

  useEffect(() => {
    const pusher = new Pusher('c910563f58aaf5d4f393', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
    //  alert(JSON.stringify(newMessages));
      setMessages([...messages,newMessages]);
      console.log(messages);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();

    }
  }, [messages]);
  console.log(`In App`);
  console.log(messages);


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat messages = {messages}></Chat>
      </div>
    </div>
  );
}

export default App;
