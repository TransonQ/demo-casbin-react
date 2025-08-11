import { useCallback } from 'react'
import { Authorizer } from 'casbin.js'
import permissions from './permissions.json'

export function useAuth() {
  const authValidate = useCallback((user: string, action: string, object: string) => {
    const auth = new Authorizer('manual')
    auth.setPermission((permissions as any)[user])

    return auth.permission?.check(action, object)
  }, [])

  return {
    authValidate,
  }
}
