import Link from 'next/link'
import { SiGithub } from 'react-icons/si'

import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          DailyBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>
      <Button variant="outline" className="flex items-center gap-2">
        <SiGithub />
        Login
      </Button>
    </nav>
  )
}
