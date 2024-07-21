import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) // useState returns two things: 1. Variable initialised value, 2. a method that is to be called whenever the value of the variable is changed

  // let counter = 5; // any updation in this variable will not be propogated in the UI

  const addValue = () => {
    if(counter == 20) throw Error("Value cant be more than 20")
    // counter = counter + 1 // here maine pehle hi value update kr di
    // setCounter(counter) // call the method and just pass in - how the value is to be changed,
    setCounter(counter + 1) // this is the actual right way  
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // Will the value be updated 4 times or just once ?
    // This is the fundamental core concept of useState and how the UI is rendered, The value will be updated only once, becase => When the ui has to be updated, we know that the updates actually haappen in batches, so when react sees that there are 4 batches of updates to be made - that are exactly the same, it captures this and instead of sending all of the multiple updates in different batches, it will send only ONE update in a sinel batch, which according to it will update the UI correctly
    // What if we actually want to update some UI component 4 times continously ? 
    // setCounter actually accenpts a function that contains a reference to the previous value of the component that was updated, (in our case its "counter"), so it has the access to the previous component value and thus we can use that to do anything (write some new logic to update the component value inside the function)
    setCounter( (prevCounter) => prevCounter + 1 ) // the name can be anything, prevCounter is just an example, you can write any name - "coffee" or "counter"
    setCounter( (prevCounter) => prevCounter + 1 )
    setCounter( (prevCounter) => prevCounter + 1 )
    setCounter( (prevCounter) => prevCounter + 1 )
    // Now until we have the previous value of the counter, we cannot update that value, so these updates are sent in different batches, thus all 4 of them will be executed 
    console.log("Clicked", counter);
  }

  const removeValue = () => {
    if(counter <= 0) throw Error("Value Cant be negative")
    setCounter(counter - 1)
    console.log("Cliked,", counter)
  }

  return (
   <>
    <h1>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value</button>
   </>
  )
}

export default App
