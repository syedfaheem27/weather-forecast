import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Kashmir" };
  }

  fetchWeather() {
    console.log("Loading...");
    console.log(this);
  }
  render() {
    return (
      <div className="app">
        <div>Weather Forecast</div>
        <input
          type="text"
          placeholder="Search Location..."
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
        />
        <button onClick={this.fetchWeather}>Fetch Weather</button>
      </div>
    );
  }
}

export default App;
