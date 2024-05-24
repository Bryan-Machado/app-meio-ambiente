function getCategoriasEcopontoByMarkers(ecopontoId, markers) {
    const categorias = new Set();

    markers.forEach(marker => {
        if (marker.ecoponto_id === ecopontoId) {
            marker.marker_has_categoria.forEach(categoria => {
                categorias.add(JSON.stringify(categoria.categoria));
            });
        }
    });

    // Convertendo os objetos de categoria de volta para objetos e retornando como array
    return Array.from(categorias).map(categoria => JSON.parse(categoria));
}

export default getCategoriasEcopontoByMarkers