"use client"
import { cn } from '@v1/ui/utils/cn'
import React, { useState } from 'react'

function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className='min-h-screen my-20 w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='text-[55px] text-white'>Pricing Plans</h1>
            
            {/* Toggle Switch */}
            <div className='flex items-center  px-2 gap-4'>
              <span className={cn(
                'text-sm transition-colors duration-200',
                !isYearly ? 'text-white' : 'text-neutral-400'
              )}>
                Monthly
              </span>
              
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={cn(
                  'relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200',
                  isYearly ? 'bg-zinc-200' : 'bg-neutral-800'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-5 w-5 transform rounded-full bg-zinc-700 transition-transform duration-200',
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
              
              <span className={cn(
                'text-sm transition-colors duration-200',
                isYearly ? 'text-white' : 'text-neutral-400'
              )}>
                Yearly
              </span>
            </div>


            {/* Pricing Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-5'>
              {/* Basic Plan */}
              <div className='bg-[#1B1B1B] h-[450px] w-72 backdrop-blur-sm rounded-md p-5 flex flex-col justify-between  border border-[#424242]'>
                <h3 className='text-xl text-white mb-2'>Analyst</h3>
                <div className='mb-4 relative  flex flex-col items-center justify-center '>
                    <span className='absolute text-xl text-white top-4 left-16'>$</span>

                  <span className='text-[52px]  font-medium text-white'>
                    {isYearly ? '24' : '30'}
                  </span>
                  <p className='text-neutral-400 '> {isYearly ? 'Yearly' : 'Monthly'}</p>
                </div>
                {isYearly && (
                  <p className='text-sm p-1 text-yellow-200 text-center bg-amber-300/30 rounded-full mb-4'>Save 20% with yearly billing</p>
                )}
                <ul className='space-y-2 text-sm text-neutral-300 mb-6'>
                  <li className='text-white'>✓ 20 Deep Research's per Month</li>
                  <li>✓ Basic analytics</li>
                  <li>✓ Email support</li>
                  <li>✓ Email support</li>
                </ul>
     
                <button className='w-full  bg-[#2B2B2B] hover:bg-neutral-600 text-white py-2 px-4 rounded-lg transition-colors'>
                  Get Started
                </button>
             
              </div>

              {/* Pro Plan */}
              <div className='bg-[#2a2a2a] flex flex-col justify-between  h-[450px] w-72 backdrop-blur-sm rounded-md p-5 border border-[#424242] relative'>
           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-zinc-200 text-black px-3 py-1 rounded-full text-xs font-medium'>
                    Most Popular
                  </span>
                </div>
                <h3 className='text-xl  text-white mb-2'>Analyst Pro</h3>
                <div className='mb-4 relative flex flex-col items-center justify-center'>
                <span className='absolute text-xl text-white top-4 left-16'>$</span>
                  <span className='text-[52px]  font-medium text-white'>
                    {isYearly ? '39' : '49'}
                  </span>
                  <p className='text-neutral-400 '> {isYearly ? 'Yearly' : 'Monthly'}</p>
                </div>
                {isYearly && (
                <p className='text-sm p-1 text-yellow-400 text-center bg-amber-500/30 rounded-full mb-4'>Save 25% with yearly billing</p>
                )}
                <ul className='space-y-2 text-sm text-neutral-300 mb-6'>
                <li className='text-white'>✓ 50 Deep Research's per Month</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <button className='w-full z-50  bg-[#1c1c1c]  hover:bg-neutral-600 text-white py-2 px-4 rounded-lg '>
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className='bg-[#161616] flex flex-col justify-between h-[450px] w-72 backdrop-blur-sm rounded-md p-5 border border-[#262626]'>
                <h3 className='text-xl  text-white mb-2'>Scale</h3>
                <div className='mb-4'>
                  <span className='text-3xl font-medium text-white'>
                  Starts at  ${isYearly ? '89' : '112'}
                  </span>
                  <span className='text-neutral-400 ml-1'>/month</span>
                </div>
                {isYearly && (
                  <p className='text-sm p-1 text-yellow-400 text-center bg-amber-500/30 rounded-full mb-4'>Save 25% with yearly billing</p>
                )}
                <ul className='space-y-2 text-sm text-neutral-300 mb-6'>
                <li className='text-white'>✓ Starts 120 Deep Research's Month</li>
                  <li>✓ Custom branding</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Advanced security</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <button className='w-full bg-neutral-700 hover:bg-neutral-600 text-white py-2 px-4 rounded-lg transition-colors'>
                  Contact Sales
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing