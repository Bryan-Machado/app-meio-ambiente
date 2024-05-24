import { useState } from 'react'
import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import useCategoriaStore from '../stores/categoriaStore'

const EditarCategoria = (categoria) => {
    const navigation = useNavigation()

    const removeCategoriaStore = useCategoriaStore((state) => state.removeCategoria);
    const updateCategoriaStore = useCategoriaStore((state) => state.updateCategoria);

    const [txtName, setTxtName] = useState(categoria.nome)
    const [txtDescricao, setTxtDescricao] = useState(categoria.descricao)
    const [imagemUrl, setImagemUrl] = useState(categoria.imagemurl)

    const updateCategoria = async () => {
        try {
            const result = await fetch('http://localhost:3000/categoria/' + categoria.id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome: txtName, descricao: txtDescricao, imageurl: imagemUrl })
            })
            const data = await result.json()
            updateCategoriaStore(data.categoria)
            if (data?.success) {
                navigation.goBack()
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.log('Error updateCategoria ' + error.message)
            alert(error.message)
        }
    }

    const removeCategoria = async () => {
        try {
            const result = await fetch('http://localhost:3000/categoria/' + categoria.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await result.json();
            console.log(data);
            if (data?.success) {
                removeCategoriaStore(categoria.id);
                navigation.goBack();
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.log('Error removeCategoria ' + error.message);
            alert(error.message);
        }
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome...'
                    onChangeText={setTxtName}
                    value={txtName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Descrição...'
                    onChangeText={setTxtDescricao}
                    value={txtDescricao}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Url da imagem...'
                    onChangeText={setImagemUrl}
                    value={imagemUrl}
                />
                <Button
                    title="Editar Categoria"
                    onPress={updateCategoria}
                />
                <Button title="Excluir" onPress={removeCategoria} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: 18,
        padding: 10,
    }
})

export default EditarCategoria