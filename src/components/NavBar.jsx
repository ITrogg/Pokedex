import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <>
      {props.list.map((pokemon) => (
        <button key={pokemon.name}>{pokemon.name}</button>
      ))}
      {props.list.name}
    </>
  )
}

NavBar.propTypes = {
  pokemonIndex : PropTypes.number,
  setPokemonIndex : PropTypes.element,
  list : PropTypes.arrayOf(PropTypes.object),
}

export default NavBar;