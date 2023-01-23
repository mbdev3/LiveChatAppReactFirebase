import React from 'react';

const Message = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-end gap-4'>
        <img src='' alt='' className='w-8 h-8 aspect-square rounded-full' />
        <div className='bg-white rounded-lg p-2 max-w-[75%]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eum amet quaerat enim
          nisi laborum voluptas necessitatibus provident earum quos!
        </div>
      </div>
      <div>
        <span className='text-xs text-gray-500 ml-14'>3 min ago</span>
      </div>
    </div>
  );
};

export default Message;
