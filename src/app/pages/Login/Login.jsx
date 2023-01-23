import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from 'firebase_/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [login, setRegister] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegister({ ...login, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      navigate('/chat');
      // Upload the file and metadata
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <div className='h-screen w-screen flex-c'>
      <section className='bg-gray-50 dark:bg-gray-900 w-full h-full'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#a'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Flowbite
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              {isError && (
                <span className='text-red-700 font-medium text-sm text-center'>
                  Something went wrong
                </span>
              )}
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Login to your account
              </h1>
              <div className='space-y-4 md:space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your email
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='arisa@company.com'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                  />
                </div>

                <button
                  onClick={() => handleClick()}
                  className='w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                  Login
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don't have an account?{' '}
                  <Link
                    to='/register'
                    className='font-medium text-blue-600 hover:underline dark:text-primary-500'>
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
