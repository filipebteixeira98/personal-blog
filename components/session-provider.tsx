'use client'

import { useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'

import { useUserStore } from '@/lib/store/user'

export function SessionProvider() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const setUser = useUserStore((state) => state.setUser)

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession()

    setUser(data.session?.user)
  }

  useEffect(() => {
    readUserSession()
    // eslint-disable-next-line
  }, [])

  return <></>
}
