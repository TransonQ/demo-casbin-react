import { useEffect } from 'react'
import { useAuthStore } from './hooks/useAuthStore'

export function CasbinDemo() {
  const { can } = useAuthStore()

  useEffect(() => {
    can('alice', 'data1', 'read').then((result) => {
      console.log('Permission check result:', result)
    })
  }, [])
  return (
    <>
      <span>权限状态</span>
      <span className='flex flex-col gap-2'></span>
    </>
  )
}
