import { useAuthContext } from 'app/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase_/firebase';
import React from 'react';

const Navbar = () => {
  const { currentUser } = useAuthContext();
  return (
    <nav className='flex justify-between items-center text-white p-2 border-b border-white'>
      <div>MBDEV Chat</div>
      <div className='flex gap-2 items-center'>
        <img src={currentUser.photoURL} alt='' className='w-10 h-10 aspect-square rounded-full' />
        <span>{currentUser.displayName}</span>
        <button
          className='bg-blue-500 rounded-lg py-1 px-4 text-sm font-semibold'
          onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
