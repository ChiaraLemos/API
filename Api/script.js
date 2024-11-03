document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://pokeapi.co/api/v2/";

  // Una lista de nombres o números de los Pokémon que quieres obtener
  const pokemonList = ["pikachu", "charmander", "bulbasaur", "squirtle", "jigglypuff"];

  async function getPokemonData(pokemon) {
    try {
      const response = await fetch(`${baseUrl}pokemon/${pokemon}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function showPokemons() {
    const pokemonContainer = document.getElementById("pokemon-list");

    for (const pokemon of pokemonList) {
      const data = await getPokemonData(pokemon);
      if (data) {
        // Crear elementos HTML para mostrar el nombre y la imagen del Pokémon
        const pokemonElement = document.createElement("div");
        pokemonElement.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}" />
        `;
        pokemonContainer.appendChild(pokemonElement); // Añadir el Pokémon al contenedor
      }
    }
  }

  // Llamar a la función para mostrar la lista de Pokémon
  showPokemons();
});