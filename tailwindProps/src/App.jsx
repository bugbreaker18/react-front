import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let person = {
    name: "Shaun",
    age: "21", 
    profession: "Doctor", 
    description: "A Good Doctor"
  }
  // const [counter, setCounter] = useState(1)
  // console.log(useState);
  return (
    <>
      <h1 className='bg-amber-600 rounded-2xl p-4 mb-4 text-black '>Tailwind check</h1>
      <Card details={person} btnText="visit me"/>
      <Card details={person} btnText='know more about me' />
      <Card details={person} />
    </>
  )
}

export default App
