import React from 'react'
import {Link}from 'react-router-dom';

const projects = () => {
  return (
    <>
    <div className='dark:bg-slate-800'>
      <div className='w-3/4 m-auto pt-10 text-center'>
        <img className='rounded-md shadow-lg' src="images/projectsImage.jpg" alt="" />
        <h1 className='text-3xl dark:text-white my-10'>All my <span className='text-green-800 font-bold dark:text-white'>projects</span></h1>
      </div>
      <div className="projects grid md:grid-cols-3 gap-5 justify-items-center items-center w-3/5 m-auto">
        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>
        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>
        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>
        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>

        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>
        <div className="project darl:bg-slate-200 rounded bg-white shadow-xl flex flex-col  p-4">
          <img src="images/code.jpg" alt="" />
          <h1 className='text-2xl'>react chat app</h1>
          <p className='text-xs my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, soluta quae unde dolor amet.</p>
          <div className='flex justify-left my-5'>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/css.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg mx-5' src="images/languages/react.jpg" alt="" /></div>
            <div><img className='w-8 rounded shadow-lg' src="images/languages/js.jpg" alt="" /></div>
          </div>
          <button className='bg-green-500 px-4 py-2 rounded w-28'>view demo</button>
        </div>
      </div>
      <div className="footer w-full bg-green-200 dark:bg-slate-300 mt-16 text-center text-black">
        <div className='p-5'>
          <h1 className='text-3xl  font-bold py-4'>Developer</h1>
          <Link to="/home" className="p-3 ">Home</Link>
          <Link to="/home" className="p-3 ">Home</Link>
          <p className='p-2 '>Lorem ipsum dolor &copy; sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default projects