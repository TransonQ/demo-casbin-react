import { create } from 'zustand'
import permissions from './permissions.json'
import { Authorizer } from 'casbin.js'

interface AuthState {
  auth: Authorizer | undefined
  user: string | undefined
  setUser: (user: string) => void
  authCheck: (act: string, obj: string) => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  auth: undefined,
  user: undefined,
  setUser: (user) => {
    console.log('user: ', user);
    const auth = new Authorizer('manual')
    auth.setPermission((permissions as any)[user])
    set({ user, auth })
  },
  authCheck: (act: string, obj: string) =>
    get().auth?.permission?.check(act, obj) ?? false,
}))
