import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "semantic-ui-react";
import { getCredentialData, updateCredentialData, deleteCredentialData } from "../Redux/Actions";

class CredentialCard extends React.Component {
  state = {
    loginId: undefined,
    password: undefined,
    openView: false,
    openEdit: false,
    openDelete: false,
  };

  getCredData = () => {
    this.props.getCredentialData(this.props.credential._id);
    this.setState({loginId: this.props.loginId, password: this.props.password})
  };

  onSubmitEdit = () => {
    const obj = {loginId: this.state.loginId, password: this.state.password}
    this.props.updateCredentialData(this.props.credential._id,obj);
    this.setState({ openEdit: !this.state.openEdit })
  }

  onSubmitDelete = () => {
    this.props.deleteCredentialData(this.props.credential._id);
    this.setState({ openDelete: !this.state.openDelete })
  }

  render() {
    const cred = this.props.credential;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{cred.websiteId.name}</div>
          <a className="meta" href={cred.websiteId.link} target="_blank">
            {cred.websiteId.link}
          </a>
          <div className="ui segment">
            <div>
              login id :{" "}
              {cred._id === this.props.id ? this.props.loginId : "xxxxxxxxxx"}
            </div>
            <div>
              password :{" "}
              {cred._id === this.props.id ? this.props.password : "xxxxxxxxxx"}
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="ui three buttons">
            <div className="ui basic green button" onClick={this.getCredData}>
              View
            </div>
            <button
              className="ui basic yellow button"
              disabled={this.props.id!==cred._id ? true : false}
              onClick={() => this.setState({ openEdit: !this.state.openEdit, loginId: this.props.loginId, password: this.props.password })}
            >
              Edit
            </button>
            <Modal
              dimmer="blurring"
              open={this.state.openEdit}
              onClose={() => this.setState({ openEdit: !this.state.openEdit, loginId: undefined, password: undefined })}
            >
              <Modal.Header>Edit this credential?</Modal.Header>
              <Modal.Content>
                <Input
                  value={
                    this.state.loginId
                  }
                  onChange={(e) => this.setState({loginId: e.target.value})}
                />
                <Input
                  value={
                    this.state.password
                  }
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </Modal.Content>
              <Modal.Actions>
                <Button
                  negative
                  onClick={() =>
                    this.setState({ openEdit: !this.state.openEdit })
                  }
                >
                  Disagree
                </Button>
                <Button
                  positive
                  onClick={this.onSubmitEdit}
                >
                  Agree
                </Button>
              </Modal.Actions>
            </Modal>
            <button
              className="ui basic red button"
              disabled={this.props.id!==cred._id ? true : false}
              onClick={() =>
                this.setState({ openDelete: !this.state.openDelete })
              }
            >
              Delete
            </button>
            <Modal
              dimmer="blurring"
              open={this.state.openDelete}
              onClose={() =>
                this.setState({ openDelete: !this.state.openDelete })
              }
            >
              <Modal.Header>Delete this credential?</Modal.Header>
              <Modal.Content>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </Modal.Content>
              <Modal.Actions>
                <Button
                  negative
                  onClick={() =>
                    this.setState({ openDelete: !this.state.openDelete })
                  }
                >
                  Disagree
                </Button>
                <Button
                  positive
                  onClick={this.onSubmitDelete}
                >
                  Agree
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.credData.id,
    loginId: state.credData.loginId,
    password: state.credData.password,
  };
};

export default connect(mapStateToProps, { getCredentialData, updateCredentialData, deleteCredentialData })(CredentialCard);
