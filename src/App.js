import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Now is your chance to make a REDUX app using an API for your
          initialState/store
        </h1>
        <h2>Good luck!</h2>
      <p>
        <a target="__blank" href="https://www.metaweather.com/api/">
          MetaWeather API
        </a>
      </p>
      </header>
      <p>
        Or find another open API{" "}
        <a target="__blank" href="https://github.com/public-apis/public-apis">
          Here!
        </a>
      </p>
    </div>
  );
}

export default App;
