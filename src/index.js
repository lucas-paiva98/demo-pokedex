import React from "react";
import ReactDOM from "react-dom";

import Avatar from "@material-ui/core/Avatar";

import Pokedex from "./Pokedex/index";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Avatar
          alt="Icon"
          src="https://cdn4.iconfinder.com/data/icons/gaming-27/300/gaming-fun-entertainment-freetime-pokemon-512.png"
        />
        <h1>PokéFight</h1>
      </div>
      <Pokedex />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
