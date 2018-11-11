import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state: {
    fileContent: null
  };

  componentDidMount() {
    axios
      .get("/healthcheck")
      .then(res => {
        console.log(res);
        this.setState({
          fileContent: res
        });
      })
      .catch(err => {
        console.log("Error");
      });
  }

  render() {
    return <div className="App">{this.fileContent}</div>;
  }
}

export default App;
