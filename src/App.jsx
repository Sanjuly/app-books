import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App Books</h1>
      <div>
        <button 
        className='border border-black rounded-lg p-10 bg-rose-400'
        onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          List Books
        </p>
      </div>
    </>
  )
}

export default App
