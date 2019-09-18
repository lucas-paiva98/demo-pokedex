import React, { useState } from "react";

import "./styles.css";
import PokeCard from "../PokeCard";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import randPokemon from "../randPokemon";

const Pokedex = props => {
  const [player1, setPlayer1] = useState(randPokemon());
  const [player2, setPlayer2] = useState(randPokemon());

  const newGame = () => {
    setPlayer1(randPokemon());
    setPlayer2(randPokemon());
  };
  return (
    <div>
      <Typography className="HeaderWin" variant="h5" component="h2">
        Winning hand!! Congrats!
      </Typography>
      <div className="Pokedex">
        {player1.map(poke => (
          <PokeCard key={poke.id} poke={poke} />
        ))}
      </div>
      <Typography className="HeaderLoss" variant="h5" component="h2">
        Losing hand! Try again!
      </Typography>
      <div className="Pokedex">
        {player2.map(poke => (
          <PokeCard key={poke.id} poke={poke} />
        ))}
      </div>
      <Button onClick={() => newGame()}>Play Again!</Button>
    </div>
  );
};

export default Pokedex;
