import React from 'react'
import { Outlet } from 'react-router';

import NavBar from '../NavBar/NavBar.jsx';

import logo from '../../assets/logo.png';

export default function Layout() {
  return <>

    <NavBar />
    <Outlet />
    
  </>
}
