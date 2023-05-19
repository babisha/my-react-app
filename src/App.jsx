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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Good Evening</h1>
      <h2>Happy Friday, Have a good one!</h2>
      <div className="card">
        
        <p>
         It was a pleasure learning about react component.
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
