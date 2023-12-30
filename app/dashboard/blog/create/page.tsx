'use client'

import { BlogForm } from '@/app/dashboard/components/BlogForm'

import { BlogFormSchemaType } from '@/app/dashboard/schema'

import { toast } from '@/components/ui/use-toast'

export default function CreateBlogPost() {
  const handleCreateBlogPost = (data: BlogFormSchemaType) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return <BlogForm onHandleSubmit={handleCreateBlogPost} />
}
