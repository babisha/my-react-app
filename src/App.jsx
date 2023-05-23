import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="box">
        <div className="circle"></div>
        <header>
          <a href="https://1.bp.blogspot.com/-8PrEAy5iJoE/X8uQXdyo-RI/AAAAAAAAKFQ/ZNPEqgvMLoM9yIboctX4T7z3J83xnLlqgCLcBGAsYHQ/s1600/bigstock-Rock-Cycle-Vector-Illustration-325357108.jpg"></a></header>
      </div>
      <article>
        <header>
          <h1>The Infinite Cycle of Rock Formation</h1>
        </header>
      </article>
      <p className="read-the-docs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  )
}

export default App
