import { useState } from 'react'
import './App.css'
import { CasbinDemo } from './CasbinDemo'
import { useFetchAuth } from './hooks/useFetchAuth'
import { Resources } from './components/Resources'

function App() {
  useFetchAuth()
  const [resource, setResource] = useState<string>('')

  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen gap-12'>
      <CasbinDemo resource={resource} />

      <Resources
        value={resource}
        onChange={setResource}
      />
    </div>
  )
}

export default App
