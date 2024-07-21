import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DashBoard from './Dashboard.jsx'

// const ReactElement = {
//   type: "a", 
//   props: {
//       target: '_blank', 
//       href: "https://google.com",
//   }, 
//   children: "Click here to visit google"
// }

function MyApp() {
  // This is JSX , here we are returning jsx, 
  // jsx => html inside js 
  return (
    <>
      <h1>Hello, custom</h1>
    </>
  )
}


const anotherElement = (
  <a href="https://google.com" target='_blank'>Choogle</a>
)

const username = "ronaldo"

const ReactElement = React.createElement( // this is similar to the customRender we made, but it has a specific parameters and their values
  'a', // 1. Tags
  { // 2. Object with Attributes
    href: "https://google.com", 
    target: '_blank',
  }, 
  "click me to visit choogle", // 3. Direct Text, 
  username 
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // < App />
    // <MyApp /> // This is ideal
    // MyApp() This is right as well, but not recommended
    // <ReactElement/> // This is wrong, this is equal to = ReactElement(), but ReactElement is not a function , its an object, so pass it as it is
    // react or vite is requiring for the function or the string that it will execute and get the html code from it and then generate a similar object like ReactElement then do some changes in DOM to render it, 
    // Here we are directly passing the object , which it is not able to take in as paramter
   ReactElement //- This works as well

  )