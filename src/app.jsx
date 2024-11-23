import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

import './app.css'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Errorpage from './components/Errorpage/Errorpage'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Startfram from './components/Startframe/Startfram'
import "@fortawesome/fontawesome-free/css/all.min.css"
const route = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      {path:"Startframe",element:<Startfram/>},
      { path: "Contact", element: <Contact /> },
      { path: "Footer", element: <Footer /> },
      { path: "Portfolio", element: <Portofolio /> },
      { path: "Navbar", element: <Navbar /> },
      { path: "About", element: <About /> },
      { path: "*", element: <Errorpage /> },
    ],
  },
]);

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={route} />
      <div>
        <h2>pola</h2>
    
      </div>
    </>
  )
}

