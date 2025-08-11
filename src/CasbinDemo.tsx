import { useAuth } from './useAuth'

export function CasbinDemo({ user }: { user: string }) {
  console.log('user: ', user)
  const { authValidate } = useAuth()

  return (
    <>
      <span>User: {user}</span>
      <span className='flex flex-col gap-2'>
        {authValidate(user, 'read', 'alice_data') && (
          <span className='text-orange-600 font-bold'>Authorized Alice</span>
        )}
        {authValidate(user, 'read', 'bob_data') && (
          <span className='text-blue-600 font-bold'>Authorized Bob</span>
        )}
      </span>
    </>
  )
}
