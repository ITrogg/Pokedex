import PropTypes from "prop-types";

const NavBar = (props) => {
  const handleNext = () => {
    props.setPokemonIndex (props.pokemonIndex + 1);
  }
  const handlePrevious = () => {
    props.setPokemonIndex (props.pokemonIndex - 1);
  }
  return (
    <>
      {props.pokemonIndex > 0 ? <button onClick={handlePrevious}>Précédant</button> : ""}
      {props.pokemonIndex < props.list.length-1 ? <button onClick={handleNext}>Suivant</button> : ""}
    </>
  )
}

NavBar.propTypes = {
  pokemonIndex : PropTypes.number,
  setPokemonIndex : PropTypes.element,
  list : PropTypes.arrayOf(PropTypes.object),
}


export default NavBar;