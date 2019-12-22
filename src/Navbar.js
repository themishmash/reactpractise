import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

function Navbar () 
{ return (<div>
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/picture'>Picture</Link></li>
    </ul>
  </nav>
</div>

)}


export default Navbar