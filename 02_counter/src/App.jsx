import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 0
  let [counter, setCounter]=useState(5)

  const increase = () =>{
    if (counter <20){
    counter = counter + 1
    setCounter(counter)
    console.log(counter)
    }
  }

  const decrease = () =>{
    if (counter >0){
    counter = counter - 1
    setCounter(counter)
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
