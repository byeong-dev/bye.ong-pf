import { create } from 'zustand'

type Section = 'home' | 'projects' | 'contact' | 'license'

interface CommonState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  selectedSection: Section
  setSelectedSection: (section: Section) => void
}

const useCommonStore = create<CommonState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state: CommonState) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  selectedSection: 'home',
  setSelectedSection: (section: Section) => set({ selectedSection: section }),
}))

export default useCommonStore
