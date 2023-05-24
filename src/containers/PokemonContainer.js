import {useState, useEffect} from 'react'
import PokemonForm from "../components/PokemonForm";

const PokemonContainer = () => {


    // Make states

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonInfo, setPokemonInfo] = useState({
        name: "",
        img: "",
        hp: "",
        type: "",

    });




    // Fetch the API
    const fetchPokemonAPI = () => {
        // Fetches infor from the API
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // Parses to JSON
        .then((response) => response.json())
        // .then((response) => console.log(response.types[0].type.name))
        // from the information got from the response, save it in pokemonInfo
        .then((response) => setPokemonInfo({
            name: response.name,
            img: response.sprites.front_default,
            hp: response.stats[0].base_stat,
            type: response.types[0].type.name
        }))
    }

    



    return ( 
        <>
            <h1>hi from the container</h1>
            <PokemonForm setPokemonName={setPokemonName} fetchPokemonAPI={fetchPokemonAPI}/>
        </>
     );
}
 
export default PokemonContainer;