import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { userGithubInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Layout />, 
//     children: [
//       {
//         path: '', 
//         element: <Home />
//       }, 
//       {
//         path: "about", 
//         element: < About />
//       }, 
//       {
//         path: "contact", 
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Better way: 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element= {<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='user/:userId' element={<User/>} />
    <Route
    // We can write the entire api logic here only
    // *Loader is an optimized version of calling and retrieving the data from apis, on certain events caused by the user, the Loader will start the fetching process and gett the req data and also store in the cache memory for further use, 
    // Its differentn from useEffect() where the apis are called after the componenet is rendered, here, whenever certain evnets occur, the apis are called, 
    // Typically the events are recorded on some other page like Home page, so that when certain event like user  hovering on a nav of a certain page (say Github) happens, the api is called and thus we have the data in our cache before the entire page is loaded. Thats beneficial  
      // loader={ () => { 
      //   fetch("....")
      // }}
      // * Read Loader  
      loader={userGithubInfo}
      path='github' 
      element={<Github/>} 
    /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
