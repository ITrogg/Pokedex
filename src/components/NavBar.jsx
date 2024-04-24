import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <>
      {props.list.map((pokemon, index) => (
        <button onClick={() => props.setPokemonIndex(index)} key={index}>{pokemon.name}</button>
      ))}
      {props.list.name}
    </>
  )
}

NavBar.propTypes = {
  pokemonIndex : PropTypes.number,
  setPokemonIndex : PropTypes.func,
  list : PropTypes.arrayOf(PropTypes.object),
}

export default NavBar;