import { Outlet } from 'react-router';
import NavBar from '../NavBar/NavBar.jsx';


export default function Layout() {
  return <>

    <NavBar />
    <Outlet />
    
  </>
}
