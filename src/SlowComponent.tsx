import { type ReactNode, useState } from "react";

export function SlowComponent({ title, gap = 1 }: { title: string, gap?: number }) {
  const [flip, setFlip] = useState(0);

  const handleFlip = () => {
    console.log("click b1");
    setFlip((prev) => prev + 1);
  };

  const TILE_COUNT = 60;
  const TILE_SIZE = 640 / TILE_COUNT;
  const DURATION = 160;
  const DELAY_PER_TILE = (2 * DURATION) / (TILE_COUNT * TILE_COUNT);

  const getTransform = (flip: number, y: number) => {
    const transforms = [
      "rotateY(0deg) rotateZ(0deg)",
      "rotateZ(-6deg)",
      "rotateZ(6deg)",
      "rotateY(0deg) rotateZ(0deg)",
      "rotateY(0deg) rotateZ(-180deg)",
      `translateX(${60 * Math.sin(y * 2 * Math.PI / TILE_COUNT)}px) rotateY(180deg) rotateZ(180deg) scale(0.9)`,
    ];
    return transforms[flip % transforms.length];
  };

  const tiles: ReactNode[] = [];
  for (let y = 0; y < TILE_COUNT; y++) {
    for (let x = 0; x < TILE_COUNT; x++) {
      tiles.push(
        <img
          src="/paris.jpg"
          className="transition-transform ease-in-out"
          alt="Paris"
          key={`${x}-${y}`}
          style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            objectFit: "none",
            objectPosition: `-${x * TILE_SIZE}px -${y * TILE_SIZE}px`,
            transform: getTransform(flip, y),
            transitionDelay: `${(x + y * TILE_COUNT) * DELAY_PER_TILE}ms`,
            transitionDuration: `${DURATION}ms`,
          }}
        />,
      );
    }
  }

  return (
    <div className="relative overflow-hidden border-zinc-600 border-1">
      <button
        type="button"
        className="grid w-[640px] h-[640px] relative"
        onClick={handleFlip}
        style={{
          gap: `${gap}px`,
          gridTemplateColumns: `repeat(${TILE_COUNT}, ${TILE_SIZE}px)`,
          gridTemplateRows: `repeat(${TILE_COUNT}, ${TILE_SIZE}px)`,
        }}
      >
        {tiles}
      </button>
      <button id="b1"
        type="button"
        className="text-sm absolute bottom-2 right-2 py-1 px-2 bg-black bg-opacity-75 rounded"
        onClick={handleFlip}
      >
        Click image to flip
      </button>
      <div className="absolute top-8 left-8 py-2 px-4 text-lg bg-black bg-opacity-50 rounded text-white
        rotate-[-10deg] shadow-lg border border-white border-opacity-20">
        {title}
      </div>
    </div >
  );
}
