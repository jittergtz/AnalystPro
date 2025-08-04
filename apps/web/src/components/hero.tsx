import React from 'react'

function Hero() {
  return (
   <main className='h-[80vh] w-full flex justify-center items-center'>
    <div className=' h-full max-w-6xl w-full p-5 '>
    <div className='flex flex-col mt-56'>
        <h1 className='text-[55px] text-zinc-300'>Analyst Pro</h1>
        <h3 className='text-[50px] text-white'>Professional Equity Research</h3>
        <div className='flex items-center gap-4 mt-12'>
            <button className=' px-6 p-1 duration-200 hover:bg-neutral-600 hover:text-zinc-300 bg-neutral-700 text-zinc-400  rounded-full'>Research</button>
            <button className=' px-10 p-1 duration-200 hover:bg-neutral-200  text-black bg-zinc-100  rounded-full'>Open App</button>
            
        </div>
        <p className='text-white text-[20px] mt-2'>Made for Analyst's to operate.</p>
    </div>
    </div>
   </main>
  )
}

export default Hero