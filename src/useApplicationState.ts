import { create } from "zustand"


interface ApplicationState {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  language: "en" | "de"
  setLanguage: (lang: "en" | "de") => void
}

export const useApplicationState = create<ApplicationState>((set) => {
  return {
    isSidebarOpen: false,
    toggleSidebar: () => {
      set((state) => {
        return { ...state, isSidebarOpen: !state.isSidebarOpen }
      })
    },
    language: "en",
    setLanguage: (language: "de" | "en") => {
      set((state) => {
        return {
          ...state, language
        }
      })
    }
  }
})




