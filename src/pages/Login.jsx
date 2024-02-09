import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const client = axios.create({
    baseURL: 'https://adservice.abujaelectricity.com/auth/detail',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await client.get(email, password);
    if (response) {
      navigate('/dashboard');
    } else {
      window.alert(response);
    }
  }
  const inputStyle =
    'p-2 m-2 box-border rounded-md border-solid border-2 hover:bg-gray-100 duration-200';
  return (
    <>
      <div className='grid xl:grid-cols-2 gap-12 grid-rows-2 h-screen'>
        <section className=''>
          <header className='h-150 p-4'>
            <img
              src='https://map.abujaelectricity.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faedc-logo.4d3a9047.png&w=128&q=75'
              alt='Logo'
            />
          </header>
          <h3 className='font-bold text-4xl p-8 text-center'>Login</h3>
          <div className='container mx-auto w-4/5'>
            <form action='' className='grid grid-rows-2 p-4 m-4'>
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={email}
                className={inputStyle}
                onChange={handleEmailChange}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                className={inputStyle}
                onChange={handlePassChange}
              />
              <button
                className='bg-gray-300 hover:bg-gray-400 duration-200 text-xl font-semibold m-4 mt-20 p-4 rounded-xl'
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </section>
        <section className='bg-aedcblue mt-52 p-4 xl:p-60 xl:h-screen xl:mt-0 text-2xl text-center'>
          <span className='font-bold text-2xl text-white'>
            Welcome to AEDC Collection app
          </span>
        </section>
      </div>
    </>
  );
}

export default Login;
