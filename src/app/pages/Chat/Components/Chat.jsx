import React from 'react';
import { AiFillCamera, AiFillVideoCamera } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import Input from './Input';
import Messages from './Messages';
const Chat = () => {
  return (
    <div className='flex-[2_1_0%] bg-slate-400 items-stretch'>
      <div className='h-full'>
        <div className='flex items-center justify-between text-white p-2 border-b'>
          <span className='text-xl'>Arisa</span>
          <div className=' text-xl flex items-center gap-3'>
            <button>
              <AiFillCamera />
            </button>
            <button>
              <AiFillVideoCamera />
            </button>
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
