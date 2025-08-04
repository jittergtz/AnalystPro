import React from 'react'

function ResultHeader() {
  return (
    <div className='p-6 rounded-xl dark:bg-[#191919] bg-[#cecece] h-64 w-full max-w-5xl'>
        <div className='flex justify-between items-center'>
     <h1 className='text-[40px] tracking-tight dark:text-white text-black'>TAKE2INTERACTIVE</h1>
     <p className='dark:text-neutral-400 text-neutral-700'>Stock <span className='dark:text-white font-semibold text-black'>221,67$</span></p>
     </div>
   
     <div className=' mt-1 p-3 rounded-xl  flex flex-col'>
        <h3 className='text- font-semibold dark:text-zinc-400 text-neutral-700'>Brief Summary</h3>
        <p className='dark:text-zinc-100 text-neutral-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti esse vitae porro soluta autem officia sit? Nisi voluptatum est perspiciatis magni quos officia, vero, reprehenderit hic, quia itaque quas debitis?</p>
     </div>
    </div>
  )
}

export default ResultHeader