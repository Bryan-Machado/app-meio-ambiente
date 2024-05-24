import { create } from 'zustand'

const useMarkerStore = create((set) => ({
  markers: [],
  setMarkers: (newMarkers) => set(() => ({ markers: newMarkers })),
  addMarker: (newMarker) => set((state) => ({ markers: [...state.markers, newMarker] })),
  removeMarker: (id) => set((state) => {
    const markersFiltrado = state.markers.filter((marker => marker.id !== id))
    return {markers: markersFiltrado}
  }),
  updateMarker: (newMarker) => set((state) => ({ markers: state.markers.map((marker) => (marker.id === newMarker.id ? newMarker : marker))})),
}))

export default useMarkerStore

//state guarda o valor atual de todos os estados como um objeto