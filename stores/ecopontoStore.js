import { create } from 'zustand'

const useEcopontoStore = create((set) => ({
  ecopontos: [],
  setEcopontos: (newEcopontos) => set(() => ({ ecopontos: newEcopontos })),
  addEcoponto: (newEcoponto) => set((state) => ({ ecopontos: [...state.ecopontos, newEcoponto] })),
  removeEcoponto: (id) => set((state) => {
    const ecopontosFiltrado = state.ecopontos.filter((ecoponto => ecoponto.id !== id))
    return {ecopontos: ecopontosFiltrado}
  }),
  updateEcoponto: (newEcoponto) => set((state) => ({ ecopontos: state.ecopontos.map((ecoponto) => (ecoponto.id === newEcoponto.id ? newEcoponto : ecoponto))})),
}))

export default useEcopontoStore

//state guarda o valor atual de todos os estados como um objeto