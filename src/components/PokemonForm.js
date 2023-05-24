import Pokemon from "./Pokemon";

const PokemonForm = ({fetchPokemonAPI, setPokemonName, pokemonName}) => {
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    

    
    return ( 
        <>
            <h1>Search for a pokemon</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => {setPokemonName(event.target.value.toLowerCase())}}/>
                <button type="submit" onClick={fetchPokemonAPI}>Search</button>
            </form>
            
        </>
     );
}
 
export default PokemonForm;