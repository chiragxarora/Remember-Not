import React from "react";
import { Tab } from "semantic-ui-react";
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ];
  render() {
    if(this.props.auth.active === false){
      return <div>Please Login!!</div>
    }
    return (
      <div>
        <div>Username: {this.props.auth.data.user.name}</div>
        <div>Role: {this.props.auth.data.user.role}</div>
        <div>Email: {this.props.auth.data.user.email}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
