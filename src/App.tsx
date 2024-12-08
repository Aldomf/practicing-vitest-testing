import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>opih</p>
      </div>
      <p>err</p>
      <div className="card">
        
        <p>
          Edit<code>src/App.tsx</code>and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
