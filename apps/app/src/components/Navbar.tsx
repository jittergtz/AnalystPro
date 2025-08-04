import React from 'react'
import { SignOut } from './sign-out'
import Image from 'next/image'
import { getUser } from '@v1/supabase/queries';
import { getI18n } from '@/locales/server';
import SettingModal from './setting-modal';

async function Navbar() {
    const { data } = await getUser();
    const t = await getI18n();
  
  return (
    <div className='flex  items-center justify-center w-full'> 
    <nav className='flex fixed top-1 rounded-full z-50 px-3 p-1 backdrop-blur-lg items-center justify-between max-w-4xl w-full'>
        <div>
        <p className='dark:text-zinc-400 text-neutral-700'>{t("welcome", { name: data?.user?.email })}</p>
        </div>
        <div>
        <SettingModal/>
          
        </div>
        </nav>
    </div>
  )
}

export default Navbar