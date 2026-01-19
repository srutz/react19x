import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'

let counter = 100;

export function getCount() {
  return counter;
}

export function setCount(newCount: number) {
  counter = newCount;
}

const root = createRoot(document.getElementById('root')!)

function renderApp() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

root.render(renderApp());

export function rerender() {
  root.render(renderApp());
  console.log("root", root);
}
