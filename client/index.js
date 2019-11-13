import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div class="title">Pixtopia</div>
          <div class="sub title">The best game you will probably never play</div>
          <div class="mini title">And all my other projects</div>
          <p>Pixtopia was a game I decided to make after a scammer who wanted a big discord server got people to join to create a game. I thought that I could rival it: yeah, no</p>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
