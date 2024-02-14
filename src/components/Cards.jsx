import React from 'react'
import './cardButton.css'
function Cards() {
  return (
    <div
     className='w-full h-[140vh] flex items-center px-[2vw] gap-1 bg-zinc-100'>
        <div className='cardcontainer mt-[-15vw] flex gap-5 h-[65vh] w-[100vw]'>
        <div className='card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#004d43]'>
        <img className='w-[13vw]'  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#cdea68] text-[#cdea68] bg-transparent shadow-inner'>©2019–2022</button>
        </div>
        <div className='card relative flex flex-col items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]'>
        <img className='w-[13vw]'  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <div className='buttonAnimation absolute mt-[23.5vw] ml-[-13vw]'>
        <button className=''><a href="">Rating 5.0 on Clutch</a> </button>
        </div>
           
        </div>
        <div className='card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]'>
        <img className='w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <div className='buttonAnimation absolute mt-[23.5vw] ml-[-9vw]'>
        <button className=''><a href="">Business Bootcamp Alumni</a> </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Cards