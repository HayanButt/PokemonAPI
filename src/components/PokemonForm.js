import Pokemon from "./Pokemon";

const PokemonForm = ({fetchPokemonAPI, setPokemonName, pokemonInfo, pokemonName}) => {
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }


        const handleSearch = () => {
            fetchPokemonAPI();
            return (
            <>
                <p>ID: {pokemonInfo.id}</p>
                <p>HP: {pokemonInfo.hp}/{pokemonInfo.hp}</p>
                <p>Type: {pokemonInfo.type}</p>
            </>
            )
        }
    

    
    return ( 
        <>
            <h1>Pokemon search</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => {setPokemonName(event.target.value.toLowerCase())}}/>
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
            
        </>
     );
}
 
export default PokemonForm;