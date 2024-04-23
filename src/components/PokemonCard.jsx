const pokemonList = [

  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "mew",

  },

];

const PokemonCard = (props) => {
  console.log(props);
  const pokemon = pokemonList[1];
  return (
    <>
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}></img> : <p>???????</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    </>
  )
}

export default PokemonCard