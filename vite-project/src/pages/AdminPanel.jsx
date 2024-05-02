import NavbarAdmin from '../layoutadmin/NavbarAdmin'
import { Outlet } from 'react-router-dom'
import FooterAdmin from '../layoutadmin/FooterAdmin'

function AdminPanel() {
  return (
    <>
      <NavbarAdmin></NavbarAdmin>
      <Outlet></Outlet>
      <FooterAdmin></FooterAdmin>
    </>
  )
}

export default AdminPanel
