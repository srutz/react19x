/** biome-ignore-all lint/style/useTemplate: <explanation> */
import { useLocalStorage } from './useLocalStorage';

export function App() {
  const [value, setValue] = useLocalStorage("my-key");
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>
        Modern React / Priority Rendering
      </div>
      <div>{value}</div>
      <button type="button" onClick={() => setValue(value + "*")}>Add *</button>
    </div>
  )
}
