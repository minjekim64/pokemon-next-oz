'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      flipped={flipped ? 'flip' : ''}
      className={`flip-img-container transform ${
        flipped ? 'rotate-y-180' : ''
      }`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}>
      <Image src={front} alt="앞면" width={200} height={200} />
      <Image
        src={back}
        alt="뒷면"
        width={200}
        height={200}
        className="rotate-y-180"
      />
    </div>
  );
}
