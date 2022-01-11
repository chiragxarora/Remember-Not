import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "semantic-ui-react";
import {
  getCredentialData,
  updateCredentialData,
  deleteCredentialData,
  validateMe,
} from "../Redux/Actions";

class CredentialCard extends React.Component {
  state = {
    loginId: undefined,
    password: undefined,
    passcode: "",
    openView: false,
    openEdit: false,
    openDelete: false,
  };

  onSubmitView = () => {
    this.props.validateMe(this.state.passcode);
    this.props.getCredentialData(this.props.credential._id);
    this.setState({ openView: !this.state.openView });
    this.setState({
      loginId: this.props.loginId,
      password: this.props.password,
      passcode: "",
    });
  };

  onSubmitEdit = () => {
    const obj = { loginId: this.state.loginId, password: this.state.password };
    this.props.updateCredentialData(this.props.credential._id, obj);
    this.setState({ openEdit: !this.state.openEdit });
  };

  onSubmitDelete = () => {
    this.props.deleteCredentialData(this.props.credential._id);
    this.setState({ openDelete: !this.state.openDelete });
  };

  render() {
    const cred = this.props.credential;
    return (
      <div className="item">
        <div class="image">
          <img src="/images/wireframe/image.png" />
        </div>
        <div className="content">
          <div className="header">{cred.websiteId.name}</div>
          <a className="meta" href={cred.websiteId.link} target="_blank">
            {cred.websiteId.link}
          </a>
          <div className="description">
            <p>
              login id :{" "}
              {cred._id === this.props.id && this.props.valid
                ? this.props.loginId
                : "xxxxxxxxxx"}
            </p>
            <p>
              password :{" "}
              {cred._id === this.props.id && this.props.valid
                ? this.props.password
                : "xxxxxxxxxx"}
            </p>
          </div>
        </div>
        <div className="extra">
        <button
            className="ui right floated red button"
            disabled={
              this.props.id !== cred._id || !this.props.valid ? true : false
            }
            onClick={() =>
              this.setState({ openDelete: !this.state.openDelete })
            }
          >
            Delete
            <i class="right chevron icon"></i>
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
              anonymous location data to Google, even when no apps are running.
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
              <Button positive onClick={this.onSubmitDelete}>
                Agree
              </Button>
            </Modal.Actions>
          </Modal>
          <button
            className="ui right floated yellow button"
            disabled={
              this.props.id !== cred._id || !this.props.valid ? true : false
            }
            onClick={() =>
              this.setState({
                openEdit: !this.state.openEdit,
                loginId: this.props.loginId,
                password: this.props.password,
              })
            }
          >
            Edit
            <i class="right chevron icon"></i>
          </button>
          <Modal
            dimmer="blurring"
            open={this.state.openEdit}
            onClose={() =>
              this.setState({
                openEdit: !this.state.openEdit,
                loginId: undefined,
                password: undefined,
              })
            }
          >
            <Modal.Header>Edit this credential?</Modal.Header>
            <Modal.Content>
              <Input
                value={this.state.loginId}
                onChange={(e) => this.setState({ loginId: e.target.value })}
              />
              <Input
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
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
              <Button positive onClick={this.onSubmitEdit}>
                Agree
              </Button>
            </Modal.Actions>
          </Modal>
          <div
            className="ui right floated green button"
            onClick={() => this.setState({ openView: !this.state.openView })}
          >
            View
            <i class="right chevron icon"></i>
          </div>
          <Modal
            dimmer="blurring"
            open={this.state.openView}
            onClose={() => this.setState({ openView: !this.state.openView })}
          >
            <Modal.Header>Enter passcode to confirm</Modal.Header>
            <Modal.Content>
              <Input
                value={this.state.passcode}
                onChange={(e) => this.setState({ passcode: e.target.value })}
              />
            </Modal.Content>
            <Modal.Actions>
              <Button
                negative
                onClick={() =>
                  this.setState({ openView: !this.state.openView })
                }
              >
                Disagree
              </Button>
              <Button positive onClick={this.onSubmitView}>
                Agree
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    id: state.credData.id,
    loginId: state.credData.loginId,
    password: state.credData.password,
    valid: state.auth.valid,
  };
};

export default connect(mapStateToProps, {
  getCredentialData,
  updateCredentialData,
  deleteCredentialData,
  validateMe,
})(CredentialCard);
