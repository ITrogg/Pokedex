import './App.css'
import PokemonCard from './components/PokemonCard';
import { useState } from "react";

const pokemonList = [
  {  
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleNext = () => {
    setPokemonIndex (pokemonIndex + 1);
  }
  const handlePrevious = () => {
    setPokemonIndex (pokemonIndex - 1);
  }

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handlePrevious}>Précédant</button> : ""}
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}></PokemonCard>   
      {pokemonIndex < pokemonList.length-1 ? <button onClick={handleNext}>Suivant</button> : ""}
    </div>
  )
}
// Mettre à jour pokemonIndex au clic : à l'aide des fonctions de gestion d'événements (onClick), associe des fonctions pour mettre à jour le state pokemonIndex au clic sur les boutons "précédent" et "suivant". Lorsque le bouton "suivant" est cliqué, incrémente pokemonIndex, et lorsqu'il est cliqué sur "précédent", décrémente pokemonIndex

export default App
