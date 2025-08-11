import { useCallback, useState } from 'react'
import './App.css'
import { CasbinDemo } from './CasbinDemo'

function App() {
  const [user, setUser] = useState('bob')
  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(event.target.value)
    console.log(`App user ${event.target.value}`)
  }, [])

  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen gap-2'>
      <span className='bg-orange-400 w-1/2 rounded-lg px-2'>role</span>
      <select
        className='w-1/2 mb-12'
        value={user}
        onChange={handleChange}
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
