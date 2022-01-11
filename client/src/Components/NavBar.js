import React from "react";
import { NavLink, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLogout } from '../Redux/Actions';

const NavBar = ({auth, tryLogout}) => {
  return (
    <div>
      <div className="ui secondary pointing menu">
          <NavLink to="/" exact className="item">Home</NavLink>
          <NavLink to="/websites" exact className="item">Websites</NavLink>
          <NavLink to="/addpassword" exact className="item">Add Password</NavLink>    
        <div className="right menu">
          <NavLink to="/me" exact className="item">Dashboard</NavLink>
          {auth.active===true ? <Link to="/" onClick={tryLogout} exact className="item">Logout</Link> : <NavLink to="/login" exact className="item">Login</NavLink>}
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
