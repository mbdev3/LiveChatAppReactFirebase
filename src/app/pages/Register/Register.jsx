import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from 'firebase_/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    image: '',
    isChecked: '',
  });
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name !== 'image') {
      setRegister({ ...register, [e.target.name]: e.target.value });
    } else {
      setRegister({ ...register, [e.target.name]: e.target.files[0] });
    }
  };

  const handleClick = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, register.email, register.password);

      const storageRef = ref(storage, register.name);

      // Upload the file and metadata
      await uploadBytesResumable(storageRef, register.image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName: register.name,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName: register.name,
              email: register.email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            const docs = await setDoc(doc(db, 'userChats', res.user.uid), {});
            console.log(docs);
            navigate('/chat');
          } catch (err) {
            console.log(err);
            setIsError(true);
          }
        });
      });
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
                Create an account
              </h1>
              <div className='space-y-4 md:space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your name
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Arisa'
                    required=''
                  />
                </div>
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
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Confirm password
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type='confirm-password'
                    name='password2'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='upload-image'
                    className='w-full cursor-pointer text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                    <input
                      onChange={(e) => handleChange(e)}
                      name='image'
                      type='file'
                      accept='.jpg'
                      className='hidden'
                      id='upload-image'
                    />
                    <span>Upload Image</span>
                  </label>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      onChange={(e) => handleChange(e)}
                      id='terms'
                      aria-describedby='terms'
                      type='checkbox'
                      name='isChecked'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required=''
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                      I accept the{' '}
                      <a
                        className='font-medium text-blue-600 hover:underline dark:text-primary-500'
                        href='#a'>
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => handleClick()}
                  className='w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?{' '}
                  <Link
                    to='/login'
                    className='font-medium text-blue-600 hover:underline dark:text-primary-500'>
                    Login here
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

export default Register;
