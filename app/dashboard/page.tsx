import Link from 'next/link'
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { BlogTable } from './components/BlogTable'

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link href="/dashboard/blog/create">
          <Button variant="outline">
            Create <PlusIcon />
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  )
}
