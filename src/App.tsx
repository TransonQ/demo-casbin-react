import { useEffect, useState } from 'react'
import './App.css'
import { CasbinDemo } from './CasbinDemo'
import { useAuthStore } from './hooks/useAuthStore'
import { useFetchAuth } from './hooks/useFetchAuth'

function App() {
  const [target, setTarget] = useState<string>('alice_data')
  const { setAuth } = useAuthStore()
  const { response } = useFetchAuth()
  useEffect(() => {
    console.log('response: ', response)
    setAuth(response)
  }, [setAuth, response])

  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen gap-2'>
      <span className='bg-orange-400 w-1/2 rounded-lg px-2'>role</span>
      <select
        className='w-1/2 mb-12 border rounded-lg'
        value={target}
        onChange={(event) => {
          setTarget(event.target.value)
        }}
      >
        <option value='alice_data'>Alice</option>
        <option value='bob_data'>Bob</option>
        <option value='admin_data'>Administrator</option>
      </select>
      <CasbinDemo target={target} />
    </div>
  )
}

export default App
