import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contactUs" exact style={{marginLeft:10}}>
            ContactUs</NavLink>         
      </div>
    );
  }
  
  export default NavBar;
