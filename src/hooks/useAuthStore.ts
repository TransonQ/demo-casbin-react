import { create } from 'zustand'
import { Authorizer } from 'casbin.js'

interface AuthStore {
  auth: Authorizer | undefined
  /** 初始化权限 */
  initAuth: (permissions: any) => void
  /** 检查权限 */
  checkAuth: (act: string, obj: string) => boolean
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  auth: undefined,
  initAuth: (permissions) => {
    const auth = new Authorizer('manual')
    auth.setPermission(permissions)
    set({ auth })
  },
  checkAuth: (act: string, obj: string) =>
    get().auth?.permission?.check(act, obj) ?? false,
}))
