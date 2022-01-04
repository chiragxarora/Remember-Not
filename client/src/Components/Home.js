import React from "react";
import { connect } from "react-redux";
import {} from "semantic-ui-react";
import CredentialCard from "./CredentialCard";
import { getCredentials } from "../Redux/Actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getCredentials();
  }
  render() {
    if (this.props.credentials[0] === -1) {
      return (
        <div>Sorry! Failed to fetch your passwords! Please try again later</div>
      );
    }
    const passwords = this.props.credentials.map((pw) => {
      return <CredentialCard credential={pw} />;
    });
    return <div className="ui cards">{passwords}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    credentials: state.credentials,
  };
};

export default connect(mapStateToProps, { getCredentials })(Home);
