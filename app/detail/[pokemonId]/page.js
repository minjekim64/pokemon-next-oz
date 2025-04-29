import NotFound from '@/app/not-found';
import FlipCard from '@/components/FlipCard';
import Link from 'next/link';

const getPokemon = async (pokemonId) => {
  const pokemonList = await fetch(
    `http://localhost:3000/api/pokemon/${pokemonId}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    },
  );
  const pokemon = await pokemonList.json();
  return { pokemon: pokemon.pokemonData };
};

export default async function Detail({ params }) {
  const { pokemonId } = params;
  const { pokemon } = await getPokemon(pokemonId);
  console.log(pokemon);
  if (Number(pokemonId) > 151) {
    return <NotFound />;
  } else {
    return (
      <div className="bg-[darkgray] p-3">
        <div className="detail-card">
          <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
          <div className="whitespace-pre-wrap text-center">
            {pokemon.description}
          </div>
          <FlipCard front={pokemon.front} back={pokemon.back} />
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-300 transition">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }
}
