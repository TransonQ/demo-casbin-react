import { useAuthStore } from './hooks/useAuthStore'

export function CasbinDemo({ target }: { target: string }) {
  const { authCheck } = useAuthStore()

  return (
    <>
      <span>App</span>
      <span className='flex flex-col gap-2'>
        {authCheck('read', target) && (
          <span className='text-orange-600 font-bold'>Authorized {target}</span>
        )}
      </span>
    </>
  )
}
