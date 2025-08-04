import React from 'react'

function SectionTwo() {
  return (
    <div className='h-[80vh] w-full gap-10 flex justify-center items-center'>
        <div className='flex flex-col gap-3  w-96'>
       <h1 className='text-white text-[55px] font-medium tracking-tight leading-[60px] '>Export full Report
       to PDF</h1>
       <p className='text-zinc-400 text-xl mt-5 my-3'>
       Direct export beautifully structed
output with charts and visual feedback.
 
       </p>
       <p className='text-zinc-400 text-xl'>
       Direct export beautifully structed
output with charts and visual feedback.
 
       </p>
       </div>
       <div className='w-[500px]  flex flex-col relative justify-center items-center border-[#2a2a2a] border h-[300px] rounded-lg bg-[#191919] shadow-[0_6px_19px_4px_rgba(0,0,0,0.51)]'>

            <h1 className='text-3xl text-white'>NVDA</h1>
            <div className=' absolute bottom-4 flex-col items-center flex justify-center'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-white to-neutral-600'>22 Pages</p>
                <p className='text-zinc-400'>Deep Equity Report </p>
            </div>
       </div>
        </div>
  )
}

export default SectionTwo