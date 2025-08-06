"use client"
import { motion } from 'motion/react'
import React from 'react'


function Hero() {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { 
      opacity: 1, 
      y: 100, 
      x: 150,
      rotate: -25,
      scale: 0.8
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: -12,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth motion
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  }

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Staggered animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <main className='h-[80vh] w-full flex justify-center items-center'>
      <div className=' h-full max-w-6xl w-full p-5 relative'>
        <motion.div 
          className='flex flex-col mt-56 z-50'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className='text-[55px] text-zinc-300 z-50'
            variants={textVariants}
          >
            Analyst Pro
          </motion.h1>
          <motion.h3 
            className='text-[50px] text-white z-50'
            variants={textVariants}
          >
            Professional Equity Research
          </motion.h3>
          <motion.div 
            className='flex items-center gap-3 mt-12'
            variants={textVariants}
          >
            <button className=' px-8 p-2 z-50 duration-200 hover:bg-neutral-600 hover:text-zinc-300 bg-neutral-700 text-zinc-400 rounded-full'>
              Research
            </button>
            <button className=' px-12 p-2 z-50 duration-200 hover:bg-neutral-200 text-black bg-zinc-100 rounded-full'>
              Open App
            </button>
          </motion.div>
          <motion.p 
            className='text-white text-[20px] z-50 mt-2'
            variants={textVariants}
          >
            Made for Analyst's to operate.
          </motion.p>
        </motion.div>

        {/* Animated Cards Stack */}
        {/* First Card (Back) */}
        <motion.div 
          className='absolute top-56 right-28 h-[400px] z-0 w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] bg-[#191919] border border-[#343434] rounded-xl flex justify-center items-center'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className='text-4xl font-bold text-white/80'>APPLE</h1>
        </motion.div>

        {/* Second Card (Middle) */}
        <motion.div 
          className='absolute top-64 right-16 h-[400px] z-0 w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] bg-[#191919] border border-[#343434] rounded-xl flex justify-center items-center'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <h1 className='text-4xl font-bold text-white/80'>GOOGLE</h1>
        </motion.div>

        {/* Third Card (Front) */}
        <motion.div 
          className='absolute h-[400px] top-72 right-2 z-0 overflow-hidden w-[600px] -rotate-12 shadow-[0_0_20px_1px_rgba(0,0,0,1)] shadow-[inset_0_0_70px_20px_rgba(0,0,0,1)] bg-gradient-to-t from-[#181818] from-[10%] to-[90%] to-[#1d1d1c] border-[2px] border-[#1f1f1f] rounded-xl flex justify-center items-center'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="relative h-full w-full">
            <div className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_20px,transparent_1px)] bg-[size:14px_24px]"></div>
            <h1 className='text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white/80'>NVIDIA</h1>
            <h1 className='text-xl absolute left-1/2 bottom-[20px] -translate-x-1/2 -translate-y-1/2 text-white/30'>Equity Report</h1>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero