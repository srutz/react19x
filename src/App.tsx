import { useEffect, useEffectEvent, useState } from "react";


function Counter({ count, onCountChange }: { count: number, onCountChange: (newCount: number) => void }) {
  const worker = useEffectEvent(() => {
    onCountChange(count + 1);
  });
  useEffect(() => {
    console.log("init interval just once");
    const i = setInterval(() => {
      worker();
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center gap-2">
      <div>
        Count is {count}
      </div>
    </div>
  )
}

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center gap-2">
      <Counter count={count} onCountChange={setCount} />
    </div>
  )
}
