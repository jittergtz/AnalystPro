import React from 'react'

function ResultHeader() {
  return (
    <div className='p-6 rounded-xl bg-[#191919] h-64 w-full max-w-5xl'>
        <div className='flex justify-between items-center'>
     <h1 className='text-[40px] tracking-tight text-white'>TAKE2INTERACTIVE</h1>
     <p className='text-neutral-400'>Stock <span className='text-white'>221,67$</span></p>
     </div>
   
     <div className=' mt-1 p-3 rounded-xl  flex flex-col'>
        <h3 className='text- font-semibold text-zinc-400'>Brief Summary</h3>
        <p className='text-zinc-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti esse vitae porro soluta autem officia sit? Nisi voluptatum est perspiciatis magni quos officia, vero, reprehenderit hic, quia itaque quas debitis?</p>
     </div>
    </div>
  )
}

export default ResultHeader