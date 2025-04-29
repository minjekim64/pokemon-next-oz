import Image from 'next/image';

export default function Card({ pokemon }) {
  return (
    <section>
      <div className="w-[150px] border-[1px] border-solid border-gray-500 rounded-2xl flex justify-center flex-col items-center pb-2 card-shadow">
        <Image src={pokemon.front} width={120} height={120} alt="포켓몬 카드" />
        <div>{pokemon.name}</div>
      </div>
    </section>
  );
}
