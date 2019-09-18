import pokemons from "./api.js";

const randPokemon = () => {
  let player = [];

  for (let i = 0; i < pokemons.length / 2; i++) {
    player.push(pokemons[Math.floor(Math.random() * 8)]);
  }
  return player;
};

export default randPokemon;
