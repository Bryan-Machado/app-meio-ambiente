import { create } from 'zustand'

const useEcopontoStore = create((set) => ({
  ecopontos: [],
  setEcopontos: (newEcopontos) => set(() => ({ Ecopontos: newEcopontos })),
  addEcoponto: (newEcoponto) => set((state) => ({ Ecopontos: [...state.Ecopontos, newEcoponto] })),
  removeEcoponto: (id) => set((state) => {
    const EcopontosFiltrado = state.Ecopontos.filter((Ecoponto => Ecoponto.id !== id))
    return {Ecopontos: EcopontosFiltrado}
  }),
  updateEcoponto: (newEcoponto) => set((state) => ({ Ecopontos: state.Ecopontos.map((Ecoponto) => (Ecoponto.id === newEcoponto.id ? newEcoponto : Ecoponto))})),
}))

export default useEcopontoStore

//state guarda o valor atual de todos os estados como um objeto