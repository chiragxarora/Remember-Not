import React, { useEffect } from "react";
import { connect } from "react-redux";
import CredentialCard from "./CredentialCard";
import Offline from "./Offline";
import { getCredentials } from "../Redux/Actions";

const Home = ({ credentials, getCredentials, active }) => {
  useEffect(() => {
    getCredentials();
  }, [getCredentials, active]);

  if (credentials[0] === -1 || active === false) {
    return <Offline />;
  }

  const passwordCards = credentials.map((pw) => (
    <CredentialCard key={pw._id} credential={pw} />
  ));

  return (
    <div className="ui centered container grid">
      <div className="fourteen wide column mt">
        <div className="ui divided items">{passwordCards}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    active: state.auth.active
  };
};

export default connect(mapStateToProps, { getCredentials })(Home);
