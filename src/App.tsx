import { useEffect } from 'react'
import './App.css'
import { CasbinDemo } from './CasbinDemo'
import { useAuthStore } from './useAuthStore'

function App() {
  const { user, setUser } = useAuthStore()

  useEffect(() => {
    /** 初始化角色 */
    setUser('bob')
  }, [setUser])

  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen gap-2'>
      <span className='bg-orange-400 w-1/2 rounded-lg px-2'>role</span>
      <select
        className='w-1/2 mb-12 border rounded-lg'
        value={user}
        onChange={(event) => {
          setUser(event.target.value)
        }}
      >
        <option value='alice'>Alice</option>
        <option value='bob'>Bob</option>
        <option value='admin'>Administrator</option>
      </select>
      <CasbinDemo user={user} />
    </div>
  )
}

export default App
