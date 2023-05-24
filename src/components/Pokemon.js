const Pokemon = ({FetchPokemonAPI, pokemonName, pokemonInfo}) => {



    return (
        <>
            <h2>{pokemonName}</h2>
            <div>
                <img src={pokemonInfo.img}/>
                <img src={pokemonInfo.shinyImg}/>
            </div>
            <p>ID: {pokemonInfo.id}</p>
            <p>HP: {pokemonInfo.hp}/{pokemonInfo.hp}</p>
            <p>Type: {pokemonInfo.type}</p>{/*/{pokemonInfo.type2}</p> */}
        </> 
     );
}
 
export default Pokemon;