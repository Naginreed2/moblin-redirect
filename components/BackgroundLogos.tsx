// components/BackgroundLogos.tsx

'use client';

import { useEffect, useState } from 'react';

// Logo filenames (in public/logos/)
const LOGOS = [
    'logo-basque.svg',
    'logo-heart.svg',
    'logo-king.svg',
    'logo-looking.svg',
    'logo-millionaire.svg',
    'logo-party.svg',
    'logo-queen.svg',
];

// Tailwind w-32,h-32 → 8rem=128px
const LOGO_WIDTH = 128;
const LOGO_HEIGHT = 128;

// Target coverage of the viewport (in percentiles 1.0 = 100%)
const COVERAGE = 0.4;

// Simple box type for overlap-checking
interface Box {
  top: number;
  left: number;
  width: number;
  height: number;
  file: string;
}

export default function BackgroundLogos() {
  const [boxes, setBoxes] = useState<Box[]>([]);

  const generatePositions = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const totalArea = vw * vh * COVERAGE;
    const logoArea = LOGO_WIDTH * LOGO_HEIGHT;
    // how many logos to draw
    const count = Math.floor(totalArea / logoArea);

    const newBoxes: Box[] = [];

    const isOverlapping = (b: Box) =>
      newBoxes.some(
        (o) =>
          b.left < o.left + o.width &&
          b.left + b.width > o.left &&
          b.top < o.top + o.height &&
          b.top + b.height > o.top
      );

    for (let i = 0; i < count; i++) {
      let attempts = 0;
      let placed = false;

      while (attempts < 50 && !placed) {
        const left = Math.random() * (vw - LOGO_WIDTH);
        const top = Math.random() * (vh - LOGO_HEIGHT);
        const file = LOGOS[Math.floor(Math.random() * LOGOS.length)];

        const candidate: Box = { top, left, width: LOGO_WIDTH, height: LOGO_HEIGHT, file };

        if (!isOverlapping(candidate)) {
          newBoxes.push(candidate);
          placed = true;
        }
        attempts++;
      }
      // if we failed after 50 tries, we skip this one
    }

    setBoxes(newBoxes);
  };

  useEffect(() => {
    generatePositions();
    window.addEventListener('resize', generatePositions);
    return () => window.removeEventListener('resize', generatePositions);
  }, []);

  return (
    <>
      {boxes.map(({ file, top, left }, i) => (
        <img
          key={`${file}-${i}`}
          src={`/logos/${file}`}
          alt=""
          className="fixed pointer-events-none opacity-10 w-32 h-32 object-contain z-[-1]"
          style={{ top, left }}
        />
      ))}
    </>
  );
}
