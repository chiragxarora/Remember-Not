import React from "react";
import Offline from "./Offline";
import './styles.css';
import { Tab } from "semantic-ui-react";
import { connect } from 'react-redux';

const Dashboard = ({ auth }) => {
  const panes = [
    { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ];

  if (auth.active === false) {
    return <Offline />;
  }

  return (
    <div className="mt">
      <div>Username: {auth.data.user.name}</div>
      <div>Role: {auth.data.user.role}</div>
      <div>Email: {auth.data.user.email}</div>
      <Tab panes={panes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
