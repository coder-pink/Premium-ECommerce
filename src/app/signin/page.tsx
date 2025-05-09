
'use client'

import { signin } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signin(email, password)
      setSuccess(true)
      setTimeout(() => {
        router.push('/')
      }, 1000) 
    } catch (err: any) {
      alert('Login failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      {success ? (
        <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md border dark:border-gray-700 space-y-4">
          <p className="text-2xl font-bold text-green-600">✅ Login Successful!</p>
          <p className="text-gray-700 dark:text-gray-300">Redirecting to homepage...</p>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sign in to your account</p>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</span>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      )}
    </div>
  )
}
