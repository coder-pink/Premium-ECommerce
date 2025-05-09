'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon />}
    </button>
  )
}



