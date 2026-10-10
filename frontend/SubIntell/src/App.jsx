import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
      <p>{data || 'Loading...'}</p>
    </>
  )
}

export default App
