import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <>
      {props.list.map((pokemon, index) => (
        <button onClick={() => {
          props.setPokemonIndex(index);
          pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
        }} key={pokemon.name}>{pokemon.name}</button>
      ))}
    </>
  )
}

NavBar.propTypes = {
  pokemonIndex : PropTypes.number,
  setPokemonIndex : PropTypes.func,
  list : PropTypes.arrayOf(PropTypes.object),
}

export default NavBar;