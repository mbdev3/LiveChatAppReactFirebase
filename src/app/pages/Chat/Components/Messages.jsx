import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='p-2 bg-slate-200 h-[calc(100%-100px)] overflow-y-auto flex flex-col gap-4'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
