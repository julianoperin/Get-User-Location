import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null }; //we dont know the lat yet that why null
  }

  //We have to define render
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position.coords.latitude),
      err => console.log(err)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
