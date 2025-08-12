import { useState } from 'react'
import './App.css'
import { CasbinDemo } from './CasbinDemo'

import { useFetchAuth } from './hooks/useFetchAuth'
import { Resources } from './components/Resources'

function App() {
  useFetchAuth()
  const [resource, setResource] = useState<string>('')

  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen gap-2'>
      <span className='bg-orange-400 w-1/2 rounded-lg px-2'>role</span>

      <Resources
        value={resource}
        onChange={setResource}
      />
      <CasbinDemo resource={resource} />
    </div>
  )
}

export default App
