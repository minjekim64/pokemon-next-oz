import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      <h1 className="border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="flex justify-center gap-5 py-4 bg-white">
        <Link href={'/'}>메인</Link>
      </nav>
    </>
  );
}
