import React from "react";
import Offline from "./Offline";
import { connect } from "react-redux";
import { getWebsites } from "../Redux/Actions";

class Websites extends React.Component {
  componentDidMount() {
    this.props.getWebsites();
  }
  
  render() {
    if(this.props.auth.active===false){
      return <Offline />
    }
    const websites = this.props.websites.map((site) => {
      return (
        <div id={site._id} className="item">
          <i className="ui icon google large"></i>
          <div className="content">
            <div className="header">{site.name}</div>
            <a href={site.link} target="_blank">{site.link}</a>
          </div>
        </div>
      );
    });
    return (
      <div className="ui celled list massive">
        {websites}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    websites: state.websites[0] === -1 ? [-1] : state.websites.data.websites,
  };
};

export default connect(mapStateToProps, { getWebsites })(Websites);
