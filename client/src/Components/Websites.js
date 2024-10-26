import React, { useEffect } from "react";
import Offline from "./Offline";
import { connect } from "react-redux";
import { getWebsites } from "../Redux/Actions";

const Websites = ({ auth, websites, getWebsites }) => {
  useEffect(() => {
    getWebsites();
  }, [getWebsites]);

  if (auth.active === false) {
    return <Offline />;
  }

  const websiteList = websites.map((site) => (
    <div key={site._id} id={site._id} className="item">
      <i className="ui icon google large"></i>
      <div className="content">
        <div className="header">{site.name}</div>
        <a href={site.link} target="_blank" rel="noopener noreferrer">{site.link}</a>
      </div>
    </div>
  ));

  return (
    <div className="ui celled list massive">
      {websiteList}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    websites: state.websites[0] === -1 ? [-1] : state.websites.data.websites,
  };
};

export default connect(mapStateToProps, { getWebsites })(Websites);
