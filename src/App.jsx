import { useState } from 'react'

import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import TremDetails from './Components/TremDetails/TremDetails.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import OurServices from './Components/OurServices/OurServices.jsx'



function App() {


  const router = createBrowserRouter([{
    element:<Layout/>,children:[
      {path:"",element:<Home />},
      {path:":Specialization/:id",element:<TremDetails />},
      {path:"ContactUs",element:<ContactUs />},
      {path:"OurServices",element:<OurServices />},
    ]

  }])
 

  return (
    <>
   

      <RouterProvider router={router} />

     
    </>
  )
}

export default App
