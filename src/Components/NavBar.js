import React from "react";
import {Link,NavLink}  from 'react-router-dom'

const NavBar =()=>{
return(<>
<h1>broeser router </h1>
<NavLink to="/home" >HOme</NavLink>||
<Link to="/contact">contsct</Link>||
<Link to="/none">none</Link>||
<Link to="/dome">dome</Link>||
<Link to="/details">details</Link>||

</>)
}
export default NavBar;