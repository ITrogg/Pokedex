const PokemonCard = (props) => {
  console.log(props);
  const pokemon = { name: "mew" };
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