import React from "react";
import { Dropdown, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getWebsites, addCredential } from "../Redux/Actions";

class AddPassword extends React.Component {
  state = { options: [], siteId: "", loginId: "", password: "" };
  componentDidMount() {
    console.log(this.state);
    this.props.getWebsites();
    this.setState({ options: this.props.websites });
  }

  onWebsiteChange = (e, { value }) => {
    console.log(value);
    this.setState({ siteId: value });
  };
  addPasswordSubmit = (e) => {
    e.preventDefault();
    this.props.addPassword(this.state.loginId, this.state.password, this.state.siteId);
    this.setState({loginId: '', password: ''});
  };
  render() {
    return (
      <div className="ui container">
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
              placeholder="Gender"
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
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
