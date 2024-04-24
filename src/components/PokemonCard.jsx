import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  // pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
  return (
    <>
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}></img> : <p>???????</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    </>
  )
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape(
    {name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,}
  ).isRequired,
}

export default PokemonCard