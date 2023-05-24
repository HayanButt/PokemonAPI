import {useState, useEffect} from 'react'
import Pokemon from "../components/Pokemon"
import PokemonForm from "../components/PokemonForm";

const PokemonContainer = () => {


    // Make states

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonInfo, setPokemonInfo] = useState({
        name: "",
        img: "",
        shinyImg: "",
        id: "",
        hp: "",
        type: "",

    });
    const [pokemonChosen, setPokemonChosen] = useState(false)

    


    // Fetch the API
    const fetchPokemonAPI = () => {
        
        // Fetches info from the API
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // Parses to JSON
        .then((response) => response.json())
        // from the information got from the response, save it in pokemonInfo
        .then((response) => setPokemonInfo({
            name: response.name,
            img: response.sprites.other.home.front_default,
            shinyImg: response.sprites.other.home.front_shiny,
            id: response.id,
            hp: response.stats[0].base_stat,
            type: response.types[0].type.name.toUpperCase(),
        }))
        setPokemonChosen(true)
    }

    




    return ( 
        <>
            <PokemonForm 
            setPokemonName={setPokemonName} 
            fetchPokemonAPI={fetchPokemonAPI} 
            pokemonInfo={pokemonInfo} 
            pokemonChose={pokemonChosen}
            pokemonName={pokemonName}
            />
            
            <Pokemon 
            fetchPokemonAPI={fetchPokemonAPI} 
            pokemonName={pokemonName} 
            pokemonInfo={pokemonInfo} 
            />
        </>
     );
}
 
export default PokemonContainer;