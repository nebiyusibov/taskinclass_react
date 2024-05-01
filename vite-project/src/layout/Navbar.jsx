import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
<header>
<nav>
    <div>React App</div>
        <ul className="nav_ul">
          <li>
            <Link to="/">Main Site</Link>
          </li>
          <li>
            <Link to="/Employes">Employes</Link>  
          </li>
          <li>
            <Link to="/AdminPanel">AdminPanel</Link>  
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>  
          </li>
         
        </ul>
    </nav>
</header>
  )
}

export default Navbar