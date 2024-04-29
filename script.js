function runProgram(){

    console.log('runProgram');
}
async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
}
function showPokemonData(pokemonData) {

    document.getElementById('pokemon-name').textContent = pokemonData.name;
    document.getElementById('pokemon-id').textContent = `#${pokemonData.id}`;
    document.getElementById('weight').textContent = `Weight: ${pokemonData.weight}`;
    document.getElementById('height').textContent = `Height: ${pokemonData.height}`;
    document.getElementById('sprite').src = pokemonData.sprites.front_default;


    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = '';
    pokemonData.types.forEach; {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = typeObj.type.name;
        typeSpan.classList.add('type', typeObj.type.name); 
        typesContainer.appendChild(typeSpan);
    };

}


function handleSearchButtonClick() {
    const searchInput = document.getElementById('search-input').value.toLowerCase(); 
    getPokemonData(searchInput)
        .then(pokemonData => {
            showPokemonData(pokemonData);
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
}


document.getElementById('search-button').addEventListener('click', handleSearchButtonClick);



















document.addEventListener('DOMContentLoaded', runProgram);