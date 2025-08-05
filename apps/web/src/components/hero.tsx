import React from 'react'

function Hero() {
  return (
   <main className='h-[80vh] w-full flex justify-center items-center'>
    <div className=' h-full max-w-6xl w-full p-5  relative'>
    
    <div className='flex flex-col mt-56 z-50'>
        <h1 className='text-[55px] text-zinc-300 z-50'>Analyst Pro</h1>
        <h3 className='text-[50px] text-white z-50'>Professional Equity Research</h3>
        <div className='flex items-center gap-4 mt-12'>
            <button className=' px-6 p-1 z-50 duration-200 hover:bg-neutral-600 hover:text-zinc-300 bg-neutral-700 text-zinc-400  rounded-full'>Research</button>
            <button className=' px-10 p-1 z-50 duration-200 hover:bg-neutral-200  text-black bg-zinc-100  rounded-full'>Open App</button>
            
        </div>
        <p className='text-white text-[20px] z-50 mt-2'>Made for Analyst's to operate.</p>
    </div>

    <div className='absolute  top-56 right-24  h-[400px] z-0 w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] bg-[#191919] border border-[#343434] rounded-xl flex justify-center items-center'>
      <h1 className='text-4xl font-bold text-white/80'>NVIDIA</h1>
    </div>

    <div className='absolute top-64 right-16 h-[400px] z-0 w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] bg-[#191919] border border-[#343434] rounded-xl flex justify-center items-center'>
      <h1 className='text-4xl font-bold text-white/80'>NVIDIA</h1>
    </div>

    <div className='absolute h-[400px] top-72 right-2 z-0 w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] bg-gradient-to-t from-[#060606] from-[10%] to-[90%] to-[#151414]  border border-[#343434] rounded-xl flex justify-center items-center'>
    <div className="relative h-full w-full">
      <div className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_20px,transparent_1px)] bg-[size:14px_24px]"></div>
      <h1 className='text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white/80'>NVIDIA</h1>
      </div>
    </div>


    </div>
   </main>
  )
}

export default Hero