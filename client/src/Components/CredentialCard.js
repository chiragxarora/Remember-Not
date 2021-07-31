import React from "react";
import { connect } from "react-redux";
import { getCredentialData } from "../Redux/Actions";

class CredentialCard extends React.Component {

  getCredData = () => {
    this.props.getCredentialData(this.props.credential._id);
  };

  componentDidMount() {
      console.log('mounted',this.props.loginId)
    if (this.props.loginId !== "xxxxxxxxxx") {
      this.setState({
        myLoginId: this.props.loginId,
        myPassword: this.props.password,
      });
    }
  }

  render() {
    const cred = this.props.credential;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{cred.website.name}</div>
          <a className="meta" href={cred.website.link} target="_blank">
            {cred.website.link}
          </a>
          <div className="ui segment">
            <div>login id : {cred._id===this.props.id ? this.props.loginId : 'xxxxxxxxxx'}</div>
            <div>password : {cred._id===this.props.id ? this.props.password : 'xxxxxxxxxx'}</div>
          </div>
        </div>
        <div className="extra content">
          <div className="ui three buttons">
            <div className="ui basic green button" onClick={this.getCredData}>
              View
            </div>
            <div className="ui basic yellow button">Edit</div>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
      id: state.credData.id,
    loginId: state.credData.loginId,
    password: state.credData.password,
  };
};

export default connect(mapStateToProps, { getCredentialData })(CredentialCard);
