import { create } from 'zustand'

const useCategoriaStore = create((set) => ({
  categorias: [],
  setCategorias: (newCategorias) => set(() => ({ categorias: newCategorias })),
  addCategoria: (newCategoria) => set((state) => ({ categorias: [...state.categorias, newCategoria] })),
  removeCategoria: (id) => set((state) => {
    const categoriasFiltrado = state.categorias.filter((categoria => categoria.id !== id))
    return {categorias: categoriasFiltrado}
  }),
  updateCategoria: (newCategoria) => set((state) => ({ categorias: state.categorias.map((categoria) => (categoria.id === newCategoria.id ? newCategoria : categoria))})),
}))

export default useCategoriaStore

//state guarda o valor atual de todos os estados como um objeto