import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footersec from './Footersection'

function MainLayout() {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
       <Footersec></Footersec>
    </>
  )
}

export default MainLayout