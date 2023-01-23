import React from 'react';
import { Chat as ChatComp, Chats, Message, Navbar, Search, Sidebar } from './Components';

const Chat = () => {
  return (
    <div className='container min-h-screen w-screen flex-c'>
      <main className=' overflow-hidden  rounded-xl flex w-2/3 h-[600px] shadow-2xl'>
        <Sidebar />
        <ChatComp />
      </main>
    </div>
  );
};

export default Chat;
