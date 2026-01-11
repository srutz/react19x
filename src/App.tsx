import { SlowComponent } from './SlowComponent'

export function App() {
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>
        Modern React / Priority Rendering
      </div>
      <SlowComponent title="Hello React19x" />
    </div>
  )
}
