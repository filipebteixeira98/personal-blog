'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PersonIcon, ReaderIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

export function Navlinks() {
  const pathname = usePathname()

  const links = [
    {
      href: '/dashboard',
      text: 'dashboard',
      Icon: ReaderIcon,
    },
    {
      href: '/dashboard/user',
      text: 'user',
      Icon: PersonIcon,
    },
  ]

  return (
    <div className="flex items-center gap-5 border-b pb-2">
      {links.map(({ href, text, Icon }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={cn(
              'flex items-center gap-1 hover:underline transition-all',
              { 'text-green-500 underline': pathname === href }
            )}
          >
            <Icon />/{text}
          </Link>
        )
      })}
    </div>
  )
}
