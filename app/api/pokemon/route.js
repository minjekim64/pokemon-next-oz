export const fetchAPI = async (pokemonId) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
  );
  const data = await response.json();

  const pokemonData = {
    id: pokemonId,
    name: data.names.find((el) => el.language.name === 'ko').name,
    description: data.flavor_text_entries.find(
      (el) => el.language.name === 'ko',
    ).flavor_text,
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
  };
  return pokemonData;
};

export async function GET(req) {
  const numberArray = Array.from({ length: 151 }, (_, i) => i + 1);
  const response = await Promise.all(numberArray.map((el) => fetchAPI(el)));
  return Response.json({ pokemonData: response });
}
