import React from 'react';
import { connect } from 'react-redux';

const Websites = (props) => {
    return(
        <div>
            Website!
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Websites);
