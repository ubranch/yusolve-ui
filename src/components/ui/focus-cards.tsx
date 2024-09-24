'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      role='button'
      tabIndex={0}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setHovered(index);
        }
      }}
      className={cn(
        'relative h-80 w-full overflow-hidden transition-all duration-300 ease-out md:h-[28rem]',
        'rounded-[2rem] shadow-md', // Unified roundness
        hovered !== null && hovered !== index && 'md:scale-[0.98] md:blur-sm',
        hovered === index
          ? 'border-2 border-white/30'
          : 'border-2 border-transparent' // Immediate border color change
      )}
      style={{
        transition: 'all 300ms ease-out, border-color 0ms', // Disable transition for border-color
      }}
    >
      <Image src={card.src} alt={card.title} fill className='object-cover' />
      <Link href={card.href} className='absolute inset-0 flex items-end p-6'>
        <div
          className={cn(
            'w-full transition-opacity duration-300',
            'opacity-100 md:opacity-0 md:group-hover:opacity-100' // Always visible on mobile, hover effect on larger screens
          )}
        >
          <h3 className='text-3xl font-semibold text-white drop-shadow-lg sm:text-3xl md:text-4xl'>
            {card.title}
          </h3>
        </div>
      </Link>
      {/* Overlay for depth */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#18344a]/30 to-transparent mix-blend-multiply'></div>
      {/* Highlights */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 mix-blend-overlay'></div>
    </div>
  )
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
  href: string;
};

export function FocusCards({ cards }: Readonly<{ cards: Card[] }>) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {cards.map((card, index) => (
        <div key={card.title} className='group'>
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
      ))}
    </div>
  );
}
