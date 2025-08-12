import { useEffect } from 'react'
import { useAuthStore } from './hooks/useAuthStore'
import { Badge } from './components/Badge'

export function CasbinDemo({ resource }: { resource: string }) {
  const { authCheck } = useAuthStore()

  useEffect(() => {}, [])
  return (
    <>
      <span>权限状态</span>
      <span className='flex flex-col gap-2'>
        {authCheck('list', resource) ? (
          <span>
            <Badge status='success'>Authorized</Badge> {resource}
          </span>
        ) : (
          <span>
            <Badge status='error'>Unauthorized</Badge> {resource}
          </span>
        )}
      </span>
    </>
  )
}
