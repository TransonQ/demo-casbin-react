import './App.css'
import { CasbinDemo } from './CasbinDemo'

function App() {
  return (
    <div className='w-lg mx-auto flex flex-col items-center justify-center h-screen'>
      <span>1</span>
      <CasbinDemo user='test_user' />
    </div>
  )
}

export default App
