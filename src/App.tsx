import { LanguageDisplay } from "./LanguageDisplay";
import { Sidebar } from "./Sidebar";
import { useApplicationState } from "./useApplicationState";

export function App() {
  const { toggleSidebar, language, setLanguage } = useApplicationState();
  return (
    <div className="h-1 grow self-stretch flex flex-col items-center justify-center gap-2">
      <div>
        Modern React / Zustand
      </div>
      <Sidebar />
      <LanguageDisplay />
      <button className="button" type="button" onClick={() => toggleSidebar()}>Toggle Sidebar</button>
      <button className="button" type="button" onClick={() => setLanguage(language == "en" ? "de" : "en")}>Toggle Language</button>

    </div>
  )
}
