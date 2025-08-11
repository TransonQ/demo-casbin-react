import { useAuthStore } from './useAuthStore'

export function CasbinDemo({ user }: { user?: string }) {
  const { authCheck } = useAuthStore()

  return (
    <>
      <span>User: {user}</span>
      <span className='flex flex-col gap-2'>
        {authCheck('read', 'alice_data') && (
          <span className='text-orange-600 font-bold'>Authorized Alice</span>
        )}
        {authCheck('read', 'bob_data') && (
          <span className='text-blue-600 font-bold'>Authorized Bob</span>
        )}
      </span>
    </>
  )
}
