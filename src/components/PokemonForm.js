import Pokemon from "./Pokemon";

const PokemonForm = ({fetchPokemonAPI, setPokemonName}) => {
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("name set")
    }
    
    
    
    
    
    
    
    return ( 
        <>
            <h1>Search for a pokemon</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
                <button type="submit" onClick={fetchPokemonAPI}>Search</button>
            </form>
            
        </>
     );
}
 
export default PokemonForm;