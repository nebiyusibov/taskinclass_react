import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAdmin() {
  return (
    <header>
<nav>
    <div>React App</div>
        <ul className="admin_ul">
          <li>
            <Link to="/">Main Site</Link>
          </li>
          <li>
            <Link to="/AdminPanel/EmployesAdmin">Employees</Link>  
          </li>
          <li>
            <Link to="/AdminPanel/AddEmployees">Add Employees</Link>  
          </li>
          <li>
            <Link to="/AdminPanel/LogOut">Log Out</Link>  
          </li>
         
        </ul>
    </nav>
</header>
  )
}

export default NavbarAdmin