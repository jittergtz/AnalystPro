import { Input } from '@v1/ui/input'
import { ChevronRight } from 'lucide'

import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

function Search() {
  return (
    <div className='flex justify-between items-center rounded-full px-1  bg-neutral-800 w-96'>
        <Input className='bg-transparent border-none' type="text" placeholder='Search' />
        <button className='w-10 h-9  flex items-center justify-center rounded-full duration-400 hover:bg-neutral-700'><MdNavigateNext className='size-4' /></button>
    </div>
  )
}

export default Search