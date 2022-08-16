import React from 'react'
import {AiFillYoutube,AiFillGithub,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {Link}from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ReactPlayer from 'react-player';
const home = () => {
  return (
    <>
    <div className='dark:bg-slate-800'>
    <div className="home w-3/4 m-auto ">
        <div className="hero py-16 md:flex justify-between items-center">
         <Slide left>
        <div className='md:w-3/5 dark:text-slate-300 '>
          <h3 className='text-2xl'>Lorem ipsum dolor sit.</h3>
          <h2 className='text-4xl py-5'>Lorem ipsum <span className='text-green-700 font-bold'>dolor</span> sit amet consectetur.</h2>
          <p className='text-md xl:pr-40'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, nobis eveniet nihil rem temporibus quod commodi rerum consectetur,
            expedita reprehenderit dolores! Tempora, rerum quia! Cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo!</p>
          <button className='bg-green-600 rounded my-8 p-3 text-white flex items-center'><AiFillYoutube size={25}/><span className='px-2'>Subscribe Youtube</span></button>
        </div>
        </Slide>
        <Slide right>
        <div className='md:w-1/2  border-r-8 border-b-8 border-green-500 rounded'>
          <img className='p-2 shadow-lg' src='images/laptopCode.jpg' alt='laptop' /> 
        </div>
        </Slide>
      </div>
      <Fade  left>
      <div className="me">
        <div className='text-center dark:text-slate-300 md:w-3/4 xl:w-1/2 m-auto'>
          <h1 className='text-2xl font-bold mt-2'>I’m Developer</h1>
          <p className='my-5 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consectetur similique reprehenderit officiis voluptatem hic beatae blanditiis eum,
            repudiandae doloremque quas deleniti? Aspernatur assumenda quis molestiae voluptatibus, eum sit numquam?</p>
        </div>
        
        <div className='md:w-3/5 m-auto  py-10 flex justify-between'>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/react.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/css.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/github.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/js.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/tailwind.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/html.jpg" alt="" />
          </div>
          <div className='w-16 h-16'>
            <img className='rounded-lg shadow-2xl' src="images/languages/bootstrap.jpg" alt="" />
          </div>
        </div>
      </div>
      </Fade>
      <Slide right>
      <div className="video  flex justify-center my-10 ">
        <ReactPlayer className="border-4 border-green-600 p-2 w-4/5"  url='https://www.youtube.com/watch?v=_FeLbNrNRQk&t=26s' />
      </div>
      </Slide>
     
      <div className="aboutme my-20 dark:text-slate-300">
        <h1 className='text-center text-4xl font-bold my-10'>Me.......</h1>
        <div className='md:flex justify-between items-center'>
          <div className=' border-4 border-green-500 p-2'>
            <img className='md:w-80' src="images/profile.jpg" alt="" />
          </div>
          <div className='md:w-1/2 my-10'>
            <h3 className='text-xl'>Lorem ipsum dolor sit amet.</h3>
            <h2 className='text-4xl my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, vitae culpa dolorem, placeat incidunt vero,
               quos alias voluptates quis pariatur nulla. Quos magni dicta quo.</p>
               <div className="buttons  my-5 flex justify-between text-black">
                <button className='bg-green-200 px-5 py-2 flex items-center rounded-md'><AiFillGithub/> github</button>
                <button className='bg-green-200 px-5 py-2 flex items-center rounded-md'><AiFillInstagram/> instigram</button>
                <button className='bg-green-200 px-5 py-2 flex items-center rounded-md'><AiFillLinkedin/> linkedin</button>
               </div>
          </div>
        </div>
      </div>
      <div className="messageme mt-10">
        <h1 className='text-center text-3xl my-5 font-bold dark:text-slate-200'>Send me a Message</h1>
        <div className='bg-green-200 dark:bg-slate-200  rounded p-10 md:flex justify-between items-center'>
        <Slide left>
          <div className='md:w-4/5 sm:px-10 '>
            <h1 className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur!</h1>
            <p className='my-5 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempora corporis laboriosam praesentium hic molestiae
               quo quam ducimus autem quibusdam iure architecto exercitationem dicta id? Voluptas.</p>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempora corporis laboriosam praesentium hic molestiae
               quo quam ducimus autem quibusdam iure architecto exercitationem dicta id? Voluptas.</p>
          </div>
          </Slide>
          <Slide right>
          <div className='bg-white md:w-1/2 h-full my-10 rounded-md'>
            <form className='p-5'>
              <label>Name</label>
              <input className='w-full border-2 py-1 rounded-md'></input>
              <label>Name</label>
              <input className='w-full border-2 py-1 rounded-md'></input>
              <label >messege</label>
              <textarea className='w-full h-52 text-top border-2 rounded-md'></textarea>
              <button className='mt-5 bg-green-500 px-10 py-2 rounded-lg'>Send</button>
            </form>
          </div>
          </Slide>
        </div>

      </div>
    </div>
    <div className="footer w-full bg-green-200 dark:bg-slate-300 mt-16 text-center text-black">
      <Slide left>
        <div className='p-5'>
          <h1 className='text-3xl  font-bold py-4'>Developer</h1>
          <Link to="/home" className="p-3 ">Home</Link>
          <Link to="/home" className="p-3 ">Home</Link>
          <p className='p-2 '>Lorem ipsum dolor &copy; sit amet consectetur, adipisicing elit.</p>
        </div>
        </Slide>
      </div>
      </div>
    </>
  )
}

export default home