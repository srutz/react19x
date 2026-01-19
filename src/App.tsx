import { getCount, rerender, setCount } from "./main";


export function App() {
  console.log('App render');
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>
        Modern React / Priority Rendering {getCount()}
      </div>
      <div>{new Date().toISOString()}</div>
      <button type="button" onClick={() => {
        setCount(getCount() + 1);
        rerender()}
      }>Rerender</button>
    </div>
  )
}
