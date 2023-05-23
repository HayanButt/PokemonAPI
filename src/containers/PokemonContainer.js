import {useState, useEffect} from 'react'
import PokemonForm from "../components/PokemonForm";

const PokemonContainer = () => {


    // Make states

    const [pokemonName, setPokemonName] = useState("");
    const [type, setType] = useState([]);




    // Fetch the API
    const fetchPokemonAPI = async () => {
        const response = await fetch(`https://pokeapi/api/v2/pokemon/${pokemonName}`);
        console.log(response)
        
        

        // Set it to the variable
        // setPokemonName(pokemonName)
    }

    useEffect (() => {
        fetchPokemonAPI();
    }, [])









    return ( 
        <>
            <h1>hi from the container</h1>
            <PokemonForm pokemonName={pokemonName}/>
        </>
     );
}
 
export default PokemonContainer;