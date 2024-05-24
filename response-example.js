const example = {
    "success": "marcadores listados com sucesso",
    "markers": [
        {
            "id": 1,
            "ecoponto_id": 2,
            "longitude": 423.123,
            "latitude": 423.123,
            "ecoponto": {
                "id": 2,
                "nome": "renner",
                "cnpj": "123.456.789-12",
                "email": null,
                "telefone": null,
                "descricao": "materiais feitos de cobre e bla bla bla bla bla utilizados para carregar coisa tal e são toxicos e sla o que wasdadadadaoooooo"
            },
            "marker_has_categoria": [
                {
                    "id": 1,
                    "marker_id": 1,
                    "categoria_id": 1,
                    "categoria": {
                        "id": 1,
                        "nome": "pilhas",
                        "descricao": "materiais feitos de cobre e bla bla bla bla bla utilizados para carregar coisa tal e são toxicos e sla o que wasdadadadaoooooo"
                    }
                }
            ]
        },
        {
            "id": 2,
            "ecoponto_id": 2,
            "longitude": 423.123,
            "latitude": 423.123,
            "ecoponto": {
                "id": 2,
                "nome": "renner",
                "cnpj": "123.456.789-12",
                "email": null,
                "telefone": null,
                "descricao": "materiais feitos de cobre e bla bla bla bla bla utilizados para carregar coisa tal e são toxicos e sla o que wasdadadadaoooooo"
            },
            "marker_has_categoria": [
                {
                    "id": 2,
                    "marker_id": 2,
                    "categoria_id": 2,
                    "categoria": {
                        "id": 2,
                        "nome": "Lixo foda",
                        "descricao": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                    }
                },
                {
                    "id": 3,
                    "marker_id": 2,
                    "categoria_id": 1,
                    "categoria": {
                        "id": 1,
                        "nome": "pilhas",
                        "descricao": "materiais feitos de cobre e bla bla bla bla bla utilizados para carregar coisa tal e são toxicos e sla o que wasdadadadaoooooo"
                    }
                }
            ]
        }
    ]
};

// Função para extrair todas as categorias de um ecoponto específico
function getCategoriasEcoponto(ecopontoId) {
    const categorias = new Set();

    example.markers.forEach(marker => {
        if (marker.ecoponto_id === ecopontoId) {
            marker.marker_has_categoria.forEach(categoria => {
                categorias.add(JSON.stringify(categoria.categoria));
            });
        }
    });

    console.log(categorias);

    // Convertendo os objetos de categoria de volta para objetos e retornando como array
    return Array.from(categorias).map(categoria => JSON.parse(categoria));
}

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

// Testando a função com o ecoponto_id 2
const categoriasEcoponto2 = getCategoriasEcoponto(2);
console.log(categoriasEcoponto2);

const ecopontos = getEcopontosByCategoria(1, example.markers)
console.log(ecopontos);