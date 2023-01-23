import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='flex-1 bg-slate-600  items-stretch'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
