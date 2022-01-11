import React from "react";
import Offline from "./Offline";
import './styles.css';
import { Dropdown, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getWebsites, addCredential } from "../Redux/Actions";

class AddPassword extends React.Component {
  state = { options: [], siteId: "", loginId: "", password: "" };
  componentDidMount() {
    this.props.getWebsites();
    this.setState({ options: this.props.websites });
  }

  onWebsiteChange = (e, { value }) => {
    this.setState({ siteId: value });
  };
  addPasswordSubmit = (e) => {
    e.preventDefault();
    this.props.addCredential(this.state.loginId, this.state.password, this.state.siteId);
    this.setState({loginId: '', password: ''});
  };
  render() {
    if(this.props.auth.active===false){
      return <Offline />
    }
    return (
      <div className="ui centered container grid">
        <div className="twelve wide column mt">
          <Form onSubmit={this.addPasswordSubmit}>
            <Form.Group widths="equal">
              <Form.Select
                search
                selection
                fluid
                autoComplete="sfsfsf"
                label="Website"
                onChange={this.onWebsiteChange}
                options={this.props.websites}
                placeholder="Website"
              />

              <Form.Input
                fluid
                label="Login Id"
                placeholder="Login Id"
                value={this.state.loginId}
                onChange={(e) => this.setState({ loginId: e.target.value })}
              />
              <Form.Input
                fluid
                label="Password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </Form.Group>
            <Form.Button>Add</Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  let websites = [];
  if (state.websites[0] != -1) {
    state.websites.data.websites.map((site) => {
      websites.push({ key: site._id, text: site.name, value: site._id });
    });
  }
  return {
    auth: state.auth,
    websites: websites,
  };
};

export default connect(mapStateToProps, { getWebsites, addCredential })(AddPassword);
