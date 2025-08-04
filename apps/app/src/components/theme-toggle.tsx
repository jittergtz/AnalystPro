"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-4 h-4 bg-neutral-600 rounded animate-pulse" />
        <span className="text-sm text-neutral-400">Loading...</span>
      </div>
    )
  }

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex].value)
  }

  return (
    <button
      onClick={cycleTheme}
      className={`flex items-center gap-3 w-full px-4 py-2 text-left text-white hover:bg-neutral-800 transition-colors ${className}`}
    >
      <CurrentIcon className="w-4 h-4" />
      <span className="text-sm">{currentTheme.label}</span>
    </button>
  )
} 