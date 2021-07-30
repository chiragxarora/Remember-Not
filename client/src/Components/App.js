import React from "react";
import { Root } from '../api';

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI();
  }
  callBackendAPI = async () => {
    try {
      console.log("calling backend");
      const response = await Root.get('/');
      console.log(response.data)
      this.setState({data: response.data.express})
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
