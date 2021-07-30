import React from "react";
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="ui secondary pointing menu massive">
          <NavLink to="/" exact className="item">Home</NavLink>
          <NavLink to="/websites" className="item">Websites</NavLink>
          <NavLink to="/addpassword" className="item">Add Password</NavLink>    
        <div className="right menu">
          <NavLink to="/me" className="item">Dashboard</NavLink>
          <NavLink to="/login" className="item">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
