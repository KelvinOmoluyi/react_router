import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // this is basically sandwitching concept to render component that fits the sandwitched url
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<GitHub />}/>
      <Route path='*' element={<div><h1>Not Found</h1></div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
