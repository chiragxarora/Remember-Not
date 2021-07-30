import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import AddPassword from "./AddPassword";
import Websites from "./Websites";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/websites" exact component={Websites} />
        <Route path="/addpassword" exact component={AddPassword} />
        <Route path="/me" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
