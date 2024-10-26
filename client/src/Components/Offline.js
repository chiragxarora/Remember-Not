import React from "react";
import './styles.css';

const Offline = () => {
  return (
    <div className="ui centered container grid stackable">
      <div className="nine wide column mt">
        <div>
          <p className="big">Looks like you're offline!</p>
          <p className="big">Or you're logged out of the app</p>
        </div>
      </div>
    </div>
  );
};

export default Offline;
