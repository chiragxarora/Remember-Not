import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import AddPassword from "./AddPassword";
import Websites from "./Websites";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";

function App({auth}) {
  return (
    <div className="ui container">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/websites" exact component={Websites} />
        <Route path="/addpassword" exact component={AddPassword} />
        <Route path="/me" exact component={Dashboard} />
        <Route path="/login" exact render={() => auth.active === true ? <Redirect to='/' /> : <Redirect to='/login' />} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact render={() => auth.active === true ? <Redirect to='/' /> : <Redirect to='/signup' />} />
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);