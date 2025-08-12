// src/store/authStore.ts
import { create } from 'zustand'
import { newEnforcer, newModel, Enforcer } from 'casbin'

interface AuthState {
  enforcer: Enforcer | null
  initEnforcer: (res: { model: string; policy: string[][] }) => Promise<void>
  can: (sub: string, obj: string, act: string) => Promise<boolean>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  enforcer: null,

  initEnforcer: async (res) => {
    const model = newModel(res.model)
    const enforcer = await newEnforcer(model)

    for (const p of res.policy) {
      await enforcer.addPolicy(...p)
    }

    set({ enforcer })
  },

  can: async (sub, obj, act) => {
    const e = get().enforcer
    if (!e) return false
    return e.enforce(sub, obj, act)
  },
}))
