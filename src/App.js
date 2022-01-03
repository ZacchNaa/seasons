import React, { Component } from "react";
import "./App.css";
import Loader from "./Loader/Loader";
import SeasonDisplay from "./SeasonDisplay";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMsg: "" };
    this.state = { time: new Date().toLocaleTimeString() };
  }

  // componentDidMount for initial data loading
  componentDidMount() {
    // getting location
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );

    // show current time
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  renderContent = () => {
    if (this.state.errMsg && !this.state.lat) {
      return (
        <div className="App">
          <h1>{this.state.errMsg}</h1>
        </div>
      );
    }

    if (!this.state.errMsg && this.state.lat) {
      return (
        <div className="App">
          <SeasonDisplay lat={this.state.lat} time={this.state.time} />
        </div>
      );
    }
    return <Loader message="Please accept location request!" />;
  };

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
