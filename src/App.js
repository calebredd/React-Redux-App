import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getJoke } from "./action/";

function App(props) {
  // console.log(props.state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Dad Jokes Generator!</h1>
        <h2>In honor of my friend: The Legendary Dad, Pal-dilla</h2>
        {/* <h1>
          Now is your chance to make a REDUX app using an API for your
          initialState/store
        </h1>
        <h2>Good luck!</h2>
        <p>
          <a target="__blank" href="https://www.metaweather.com/api/">
            MetaWeather API
          </a>
        </p> */}
      </header>
      {/* <p>
        Or find another open API{" "}
        <a target="__blank" href="https://github.com/public-apis/public-apis">
          Here!
        </a>
      </p> */}
      <button onClick={() => props.getJoke()}>Generate a new Dad Joke!</button>
      <div className="jokes">
        {props.state.jokes.map(joke => (
          <p className="joke">{joke}</p>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
// export default App;
export default connect(
  mapStateToProps,
  { getJoke }
)(App);
