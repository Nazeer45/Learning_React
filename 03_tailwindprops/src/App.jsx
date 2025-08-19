import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj = {
    name: "Shaik",
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card name="Nazeer" btntxt="Click Me" />
      <Card service={"React"}/>
    </>
  )
}

export default App
