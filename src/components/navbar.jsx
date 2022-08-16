import React from 'react';
import {Link }from 'react-router-dom';
import {BsMoonStarsFill} from 'react-icons/bs'


const navbar = () => {
  const darkHandler =()=>{
    if (localStorage.theme === 'dark'|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    }
  }
  return (
    <nav className='dark:bg-slate-800'>
    <div className='sm:w-3/4 px-5  h-10 m-auto  flex justify-between items-center text-lg py-10'>
      <div className='flex'>
        <img src="logo.png" alt="" /> <span className='sm:px-5 md:text-2xl font-bold dark:text-gray-300'><Link to="/" >Developer</Link></span>
      </div>
      <div className='flex'>
        <ul className='w-28 flex justify-between items-center text-sm dark:text-gray-200'>
          <li className='border-b-2 border-green-600 '><Link to="/">Home</Link></li>
          <li className='border-b-2 border-green-600'><Link to="/projects">Projects</Link></li>
        </ul>
        <div><button onClick={darkHandler} className='bg-gray-800 ml-5 px-5 py-1 dark:bg-slate-100 rounded-lg flex items-center text-white dark:text-black'><BsMoonStarsFill/>Dark</button></div>
      </div>
    </div>

    </nav>
  )
}

export default navbar