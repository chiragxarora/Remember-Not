import React from "react";
import { connect } from "react-redux";
import {} from "semantic-ui-react";
import CredentialCard from "./CredentialCard";
import Offline from "./Offline";
import { getCredentials } from "../Redux/Actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getCredentials();
  }
  render() {
    if (this.props.credentials[0] === -1) {
      return (
        <Offline />
      );
    }
    const passwords = this.props.credentials.map((pw) => {
      return <CredentialCard credential={pw} />;
    });
    return (
      <div className="ui centered container grid">
        <div className="fourteen wide column mt">
          <div className="ui divided items"> {passwords} </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    credentials: state.credentials,
  };
};

export default connect(mapStateToProps, { getCredentials })(Home);
