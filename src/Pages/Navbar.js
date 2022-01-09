import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
    <ul class="nav-list">
      <li class="nav-item">
      </li>
      <li class="nav-item">
<Link to="/" >
<button class="btn-primary">Dashboard</button>

</Link>      </li>
      <li class="nav-item">
<Link to="/head">
<button class="btn-primary">Head</button>

</Link>
      </li>
      <li class="nav-item">
<Link to="/teacher">
<button class="btn-primary">Teacher</button>

</Link>
      </li>
      
    </ul>
  </nav>
        </div>
    )
}

export default Navbar
