import { create } from 'zustand'
import { User } from '@supabase/supabase-js'

interface UserState {
  user: User | undefined
  setUser: (user: User | undefined) => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}))
