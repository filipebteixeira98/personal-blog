'use client'

import Link from 'next/link'

import { LoginForm } from './LoginForm'
import { Profile } from './Profile'

import { useUserStore } from '@/lib/store/user'

export function Navbar() {
  const user = useUserStore((state) => state.user)

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          DailyBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  )
}
