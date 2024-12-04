import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='maindiv'>
        <div className='leftside'>
            <div className='icons'><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#ffb803" d="M99.32 28.84L93.51 9.5l-1.98-2.66s-.15-.18-.17-.24c-.06-.25-.13-.66.11-.97c.18-.23.49-.29.85-.26c.14.01.48.14 1.02.44c5.31 3 28.21 21.75 30.14 52.02c1.09 17.1-5.15 35.4-18.27 48.16c-12.46 12.11-31.28 19.65-51.98 16.7c-30.94-4.41-44.22-23.21-47.69-29.42c-.61-1.1-.91-1.8-.97-1.97c-.82-2.15-.6-3.24.17-3.49c.2-.06.65.02.9.3c1 1.12 2.82 1.85 2.82 1.85l12.88 10.43l63.89 4.84l22.65-49.38z" /><path fill="#ffca29" d="M73.65 87.67c15.97-9.9 23.77-26.72 24.39-42.28c.9-22.79-6.68-38.8-6.68-38.8s14.01 11.5 21.68 28.08s9 43.87-7.78 63.4c-18.45 21.45-43.18 22.72-58.73 18.7c-32.27-8.35-41.09-28.83-41.09-28.83s17.78 9.95 37.77 8.9c14.88-.78 22.54-4.27 30.44-9.17" /></svg>
            </div>
            <div className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum quia dolorum recusandae porro reprehenderit reiciendis velit iusto nesciunt placeat eos commodi enim itaque ducimus, nisi animi suscipit, maiores iure.
            </div>

            <button className='button'>Readmore</button>
          </div>


          <div className='rightside'>
            <div className='Signup'>Sign Up</div>
            <div className='input1'>
              <input type='text' placeholder='Username' />
              <input type='password' placeholder='Enter a password' />
            </div>
            <button className='submit'>Submit</button>
          </div>
        </div>
      </>
      )
}

      export default App
