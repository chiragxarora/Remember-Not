import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "semantic-ui-react";
import {
  getCredentialData,
  updateCredentialData,
  deleteCredentialData,
  validateMe,
} from "../Redux/Actions";

const CredentialCard = ({
  auth,
  id,
  loginId,
  password,
  valid,
  credential,
  getCredentialData,
  updateCredentialData,
  deleteCredentialData,
  validateMe
}) => {
  const [stateLoginId, setLoginId] = useState(undefined);
  const [statePassword, setPassword] = useState(undefined);
  const [passcode, setPasscode] = useState("");
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const onSubmitView = () => {
    validateMe(passcode);
    getCredentialData(credential._id);
    setOpenView(!openView);
    setLoginId(loginId);
    setPassword(password);
    setPasscode("");
  };

  const onSubmitEdit = () => {
    const obj = { loginId: stateLoginId, password: statePassword };
    updateCredentialData(credential._id, obj);
    setOpenEdit(!openEdit);
  };

  const onSubmitDelete = () => {
    deleteCredentialData(credential._id);
    setOpenDelete(!openDelete);
  };

  return (
    <div className="item">
      <div className="image">
        <img src="/images/wireframe/image.png" alt="Placeholder" />
      </div>
      <div className="content">
        <div className="header">{credential.websiteId.name}</div>
        <a className="meta" href={credential.websiteId.link} target="_blank" rel="noopener noreferrer">
          {credential.websiteId.link}
        </a>
        <div className="description">
          <p>
            login id : {credential._id === id && valid ? loginId : "xxxxxxxxxx"}
          </p>
          <p>
            password : {credential._id === id && valid ? password : "xxxxxxxxxx"}
          </p>
        </div>
      </div>
      <div className="extra">
        <button
          className="ui right floated red button"
          disabled={id !== credential._id || !valid}
          onClick={() => setOpenDelete(!openDelete)}
        >
          Delete
          <i className="right chevron icon"></i>
        </button>
        <Modal
          dimmer="blurring"
          open={openDelete}
          onClose={() => setOpenDelete(!openDelete)}
        >
          <Modal.Header>Delete this credential?</Modal.Header>
          <Modal.Content>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setOpenDelete(!openDelete)}>
              Disagree
            </Button>
            <Button positive onClick={onSubmitDelete}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>

        <button
          className="ui right floated yellow button"
          disabled={id !== credential._id || !valid}
          onClick={() => {
            setOpenEdit(!openEdit);
            setLoginId(loginId);
            setPassword(password);
          }}
        >
          Edit
          <i className="right chevron icon"></i>
        </button>
        <Modal
          dimmer="blurring"
          open={openEdit}
          onClose={() => {
            setOpenEdit(!openEdit);
            setLoginId(undefined);
            setPassword(undefined);
          }}
        >
          <Modal.Header>Edit this credential?</Modal.Header>
          <Modal.Content>
            <Input
              value={stateLoginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
            <Input
              value={statePassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setOpenEdit(!openEdit)}>
              Disagree
            </Button>
            <Button positive onClick={onSubmitEdit}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>

        <div className="ui right floated green button" onClick={() => setOpenView(!openView)}>
          View
          <i className="right chevron icon"></i>
        </div>
        <Modal
          dimmer="blurring"
          open={openView}
          onClose={() => setOpenView(!openView)}
        >
          <Modal.Header>Enter passcode to confirm</Modal.Header>
          <Modal.Content>
            <Input
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setOpenView(!openView)}>
              Disagree
            </Button>
            <Button positive onClick={onSubmitView}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.credData.id,
  loginId: state.credData.loginId,
  password: state.credData.password,
  valid: state.auth.valid,
});

export default connect(mapStateToProps, {
  getCredentialData,
  updateCredentialData,
  deleteCredentialData,
  validateMe,
})(CredentialCard);
