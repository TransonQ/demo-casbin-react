import { useCallback, useEffect } from 'react'
import { useAuthStore } from './hooks/useAuthStore'
import { Badge } from './components/Badge'
import { Authorizer } from 'casbin.js'

export function CasbinDemo({ resource }: { resource: string }) {
  const { checkAuth } = useAuthStore()

  const autoAuth = useCallback(async () => {
    const auth = new Authorizer('auto', {
      endpoint: ' http://localhost:7001/casbin',
    })
    auth.setUser('alice')
    const res = await auth.can('read', 'data1')
    console.log('res: ', res)
  }, [])

  useEffect(() => {
    autoAuth()
  }, [autoAuth])

  return (
    <>
      <span>权限状态</span>
      <span className='flex flex-col gap-2'>
        {checkAuth('list', resource) ? (
          <span>
            <Badge status='success'>Authorized LIST</Badge> {resource}
          </span>
        ) : (
          <span>
            <Badge status='error'>Unauthorized LIST</Badge> {resource}
          </span>
        )}
        {checkAuth('get', resource) ? (
          <span>
            <Badge status='success'>Authorized GET</Badge> {resource}
          </span>
        ) : (
          <span>
            <Badge status='error'>Unauthorized GET</Badge> {resource}
          </span>
        )}
      </span>
    </>
  )
}
