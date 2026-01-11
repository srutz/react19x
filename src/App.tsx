import { useState, useTransition } from "react";
import { SlowComponent } from "./SlowComponent";

export function App() {
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState("React 19x");
  const [gap, setGap] = useState(1);
  const [deferredTitle, setDeferredTitle] = useState(title);
  const [deferredGap, setDeferredGap] = useState(gap);
  console.log("render App", { title, isPending });
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>Modern React / Priority Rendering {isPending && "⏳"}</div>

      <input
        placeholder="Type text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          startTransition(() => setDeferredTitle(e.target.value))
        }}
      />
      <input
        type="range"
        min={0}
        max={10}
        value={gap}
        onChange={(e) => {
          setGap(Number.parseInt(e.target.value, 10));
          startTransition(() => setDeferredGap(Number.parseInt(e.target.value, 10)))
        }}
      />

      <SlowComponent title={deferredTitle} gap={deferredGap} />
    </div>
  );
}
