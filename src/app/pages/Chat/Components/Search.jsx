import React, { useState } from 'react';

const Search = () => {
  const [username, setUsername] = useState('');
  return (
    <div className='w-full border-b p-2 flex flex-col gap-2 text-white'>
      <input
        type='text'
        placeholder='search'
        className='w-full bg-transparent border rounded-lg  p-2 outline-none '
      />
      <div className='flex items-center gap-2 '>
        <img src='' alt='' className='w-10 h-10 aspect-square rounded-full' />
        <div>
          <span className='font-semibold'>Arisa</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
