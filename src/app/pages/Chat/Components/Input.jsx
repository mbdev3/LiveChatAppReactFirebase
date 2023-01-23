import React from 'react';
import { BsImageFill } from 'react-icons/bs';

const Input = () => {
  return (
    <div className='p-2 bg-white flex items-center justify-between gap-4'>
      <div className='w-full'>
        <input
          type='text'
          name=''
          id=''
          placeholder='type here...'
          className='w-full text-lg outline-none text-gray-800'
        />
      </div>
      <div className='flex items-center gap-2'>
        <div>
          <label htmlFor='add-image' className='cursor-pointer text-blue-500 text-2xl'>
            {' '}
            <input type='file' accept='.jpg,.png' name='' id='add-image' className='hidden' />
            <BsImageFill />
          </label>
        </div>
        <div>
          <button className='w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
