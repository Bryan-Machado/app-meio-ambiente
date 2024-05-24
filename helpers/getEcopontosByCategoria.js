function getEcopontosByCategoria(categoriaId, markers) {
    const ecopontos = new Set();

    markers.forEach(marker => {
        marker.marker_has_categoria.forEach(categoria => {
            if (categoria.categoria_id === categoriaId) {
                ecopontos.add(JSON.stringify(marker.ecoponto));
            }
        });
    });

    // Convertendo os objetos de ecoponto de volta para objetos e retornando como array
    return Array.from(ecopontos).map(ecoponto => JSON.parse(ecoponto));
}

export default getEcopontosByCategoria