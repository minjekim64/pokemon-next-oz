import Card from '@/components/Card';
import Link from 'next/link';

const getAllPokemon = async () => {
  const pokemonList = await fetch('http://localhost:3000/api/pokemon', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  const pokemonData = await pokemonList.json();
  return { pokemonData: [...pokemonData.pokemonData] };
};

export default async function Home() {
  const { pokemonData } = await getAllPokemon();

  return (
    <div className="container">
      {pokemonData.map((el) => (
        <Link key={el.id} href={`/detail/${el.id}`}>
          <Card pokemon={el} />
        </Link>
      ))}
    </div>
  );
}
