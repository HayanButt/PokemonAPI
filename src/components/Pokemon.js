const Pokemon = ({FetchPokemonAPI, pokemonName, pokemonInfo}) => {



    

    return (
        <>
            <h2>{pokemonName}</h2>
            <div className="info__wrapper">
                <div className="img__wrapper">
                    <img className="img1" src={pokemonInfo.img}/>
                    <img className="img2" src={pokemonInfo.shinyImg}/>
                </div>
                <p>ID: {pokemonInfo.id}</p>
                <p>HP: {pokemonInfo.hp}</p>
                <p>Type: {pokemonInfo.type}</p>
            </div>
        </> 
     );
}
 
export default Pokemon;