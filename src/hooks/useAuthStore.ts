import { create } from 'zustand'
import { Authorizer } from 'casbin.js'

interface AuthState {
  auth: Authorizer | undefined
  setAuth: (permissions: any) => void
  authCheck: (act: string, obj: string) => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  auth: undefined,
  setAuth: (permissions) => {
    const auth = new Authorizer('manual')
    auth.setPermission(permissions)
    set({ auth })
  },
  authCheck: (act: string, obj: string) =>
    get().auth?.permission?.check(act, obj) ?? false,
}))
