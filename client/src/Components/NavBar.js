import React from "react";
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLogout } from '../Redux/Actions';

const NavBar = ({auth, tryLogout}) => {
  return (
    <div>
      <div className="ui secondary pointing menu massive">
          <NavLink to="/" exact className="item">Home</NavLink>
          <NavLink to="/websites" className="item">Websites</NavLink>
          <NavLink to="/addpassword" className="item">Add Password</NavLink>    
        <div className="right menu">
          <NavLink to="/me" className="item">Dashboard</NavLink>
          {auth.active===true ? <NavLink to="/" onClick={tryLogout} exact className="item">Logout</NavLink> : <NavLink to="/login" className="item">Login</NavLink>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { tryLogout })(NavBar);
