'use client'
import { logout } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    await logout()
    router.push('/signin')
  }

  return (
    <button onClick={handleLogout} className="text-red-600 font-bold">
      Logout
    </button>
  )
}
