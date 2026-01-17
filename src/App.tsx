import { useEffect, useState } from 'react';
import { SlowComponent } from './SlowComponent'

export function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>
        Modern React / Activity
      </div>
      <button type="button" onClick={() => setShowContent((prev) => !prev)}>
        Toggle Content
      </button>
      {/*
      <Activity mode={showContent ? 'visible' : 'hidden'} >
        <MyContent></MyContent>
      </Activity>
      */}
      <div style={{ display: showContent ? 'block' : 'none' }}>
        <MyContent></MyContent>
      </div>
      <div className="grow" />
    </div>
  )
}


function MyContent() {
  console.log('MyContent render');
  useEffect(() => {
    console.log('MyContent mounted');
    return () => {
      console.log('MyContent unmounted');
    }
  }, []);
  return (
    <div className="flex flex-col items-center gap-4">
      <SlowComponent title="Bonjour" gap={2} />
    </div>
  )
}
