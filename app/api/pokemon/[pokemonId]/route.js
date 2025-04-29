import { fetchAPI } from '../route';

export async function GET(req, { params }) {
  const { pokemonId } = params;
  const response = await fetchAPI(pokemonId);

  if (response) {
    return Response.json({ pokemonData: response });
  } else {
    return Response.send({ message: 'no data' });
  }
}
