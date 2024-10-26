import React, { useEffect, useState } from "react";
import Offline from "./Offline";
import './styles.css';
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { getWebsites, addCredential } from "../Redux/Actions";

const AddPassword = ({ auth, websites, getWebsites, addCredential }) => {
  const [siteId, setSiteId] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getWebsites();
  }, [getWebsites]);

  const onWebsiteChange = (e, { value }) => {
    setSiteId(value);
  };

  const addPasswordSubmit = (e) => {
    e.preventDefault();
    addCredential(loginId, password, siteId);
    setLoginId("");
    setPassword("");
  };

  if (auth.active === false) {
    return <Offline />;
  }

  return (
    <div className="ui centered container grid">
      <div className="twelve wide column mt">
        <Form onSubmit={addPasswordSubmit}>
          <Form.Group widths="equal">
            <Form.Select
              search
              selection
              fluid
              autoComplete="off"
              label="Website"
              onChange={onWebsiteChange}
              options={websites}
              placeholder="Website"
            />
            <Form.Input
              fluid
              label="Login Id"
              placeholder="Login Id"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Button>Add</Form.Button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const websites = state.websites[0] !== -1 
    ? state.websites.data.websites.map((site) => ({
        key: site._id,
        text: site.name,
        value: site._id,
      }))
    : [];
  return {
    auth: state.auth,
    websites,
  };
};

export default connect(mapStateToProps, { getWebsites, addCredential })(AddPassword);
