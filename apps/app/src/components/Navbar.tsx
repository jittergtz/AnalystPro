import React from 'react'
import { SignOut } from './sign-out'
import Image from 'next/image'
import { getUser } from '@v1/supabase/queries';
import { getI18n } from '@/locales/server';

async function Navbar() {
    const { data } = await getUser();
    const t = await getI18n();
  
  return (
    <div className='flex   items-center justify-center w-full'> 
    <nav className='flex fixed top-2 items-center justify-between max-w-4xl w-full'>
        <div>
        <p className='text-zinc-400'>{t("welcome", { name: data?.user?.email })}</p>
        </div>
        <div>
            <SignOut />
        </div>
        </nav>
    </div>
  )
}

export default Navbar