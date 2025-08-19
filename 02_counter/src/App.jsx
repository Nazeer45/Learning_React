import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 0
  let [counter, setCounter]=useState(5)

  const increase = () =>{
    if (counter <20){
    // setCounter(counter+1) // if setCounter is called multiple times then counter will not be updated multiple times
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // to update multiple times then use callback function in setCounter
    setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
    console.log(counter)
    }
  }

  const decrease = () =>{
    if (counter >0){
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increase}>Increase {counter}</button>
      <br />
      <button onClick={decrease}>Decrease {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
