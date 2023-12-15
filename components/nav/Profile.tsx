import { createBrowserClient } from '@supabase/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { DashboardIcon, LockOpen1Icon } from '@radix-ui/react-icons'

import { useUserStore } from '@/lib/store/user'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

export function Profile() {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogout = async () => {
    await supabase.auth.signOut()

    setUser(undefined)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={user?.user_metadata.avatar_url}
          alt={user?.user_metadata.user_name}
          width={50}
          height={50}
          className="rounded-full ring-2 ring-green-500"
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 space-y-3 divide-y">
        <div className="px-4 text-sm">
          <p>{user?.user_metadata.user_name}</p>
          <p className="text-gray-500">{user?.user_metadata.email}</p>
        </div>
        <Link href="/dashboard" className="block">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between"
          >
            Dashboard
            <DashboardIcon />
          </Button>
        </Link>
        <Link href="/dashboard" className="block">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between"
            onClick={handleLogout}
          >
            Logout
            <LockOpen1Icon />
          </Button>
        </Link>
      </PopoverContent>
    </Popover>
  )
}
