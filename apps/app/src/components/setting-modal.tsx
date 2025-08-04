"use client"
import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, User, Settings, LogOut } from 'lucide-react'
import { SignOut } from './sign-out'

function SettingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option : any) => {
    console.log(`Clicked: ${option}`)
    setIsOpen(false)
    // Add your logic here for each option
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <div 
        className="rounded-full select-none bg-neutral-800 w-20 h-7 px-2 flex items-center justify-between cursor-pointer hover:bg-neutral-700 transition-colors"
        onClick={toggleDropdown}
      >
        <span className="text-white text-sm">Pro</span>
        <ChevronDown 
          className={`w-3 h-3 text-white transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </div>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-8 right-0 w-40 bg-neutral-900 rounded-lg shadow-lg border border-neutral-700 z-50 overflow-hidden">
          <div className="py-1">
            {/* Profile Option */}
            <button
              onClick={() => handleOptionClick('Profile')}
              className="w-full px-4 py-2 text-left text-white hover:bg-neutral-800 transition-colors flex items-center gap-3"
            >
              <User className="w-4 h-4" />
              <span className="text-sm">Profile</span>
            </button>

            {/* Settings Option */}
            <button
              onClick={() => handleOptionClick('Settings')}
              className="w-full px-4 py-2 text-left text-white hover:bg-neutral-800 transition-colors flex items-center gap-3"
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm">Settings</span>
            </button>

            {/* Divider */}
            <div className="border-t border-neutral-700 "></div>

            {/* Sign Out Option */}
            <button
              onClick={() => handleOptionClick('Sign Out')}
              className="w-full  text-left text-red-400 hover:bg-neutral-800 transition-colors flex items-center gap-3"
            >
       
              <SignOut/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingModal