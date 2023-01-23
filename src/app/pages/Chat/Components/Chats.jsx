import React from 'react';

const Chats = () => {
  return (
    <div className='text-white p-2 flex flex-col gap-4 hover:bg-slate-700 cursor-pointer'>
      <div className='flex items-center gap-2'>
        <img src='' alt='' className='w-10 h-10 aspect-square rounded-full' />
        <div>
          <span className='font-semibold'> Arisa</span>
          <p className='text-sm'>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
