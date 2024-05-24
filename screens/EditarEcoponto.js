import { useState } from 'react'
import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import useEcopontoStore from '../stores/ecopontoStore'

const EditarEcoponto = ({ ecoponto }) => {
    const navigation = useNavigation()

    const removeEcopontoStore = useEcopontoStore((state) => state.removeEcoponto);
    const updateEcopontoStore = useEcopontoStore((state) => state.updateEcoponto);

    const [txtName, setTxtName] = useState(ecoponto.nome)
    const [txtEmail, setTxtEmail] = useState(ecoponto.email)
    const [txtTelefone, setTxtTelefone] = useState(ecoponto.telefone)
    const [txtCnpj, setTxtCnpj] = useState(ecoponto.cnpj)
    const [txtDescricao, setTxtDescricao] = useState(ecoponto.descricao)
    const [imagemUrl, setImagemUrl] = useState(ecoponto.imagemurl)

    const updateEcoponto = async () => {
        try {
            const result = await fetch('http://localhost:3000/ecoponto/' + ecoponto.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome: txtName, email: txtEmail, cnpj: txtCnpj, telefone: txtTelefone, descricao: txtDescricao, imageurl: imagemUrl })
            })
            const data = await result.json()
            updateEcopontoStore(data.ecoponto)
            if (data?.success) {
                navigation.goBack()
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.log('Error updateEcoponto ' + error.message)
            alert(error.message)
        }
    }

    const removeEcoponto = async () => {
        try {
            const result = await fetch('http://localhost:3000/ecoponto/' + ecoponto.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await result.json();
            console.log(data);
            if (data?.success) {
                removeEcopontoStore(ecoponto.id);
                navigation.goBack();
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.log('Error removeEcoponto ' + error.message);
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
                    placeholder='Email...'
                    onChangeText={setTxtEmail}
                    value={txtEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha...'
                    onChangeText={setTxtCnpj}
                    value={txtCnpj}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefone...'
                    onChangeText={setTxtTelefone}
                    value={txtTelefone}
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
                    title="Editar Ecoponto"
                    onPress={updateEcoponto}
                />
                <Button title="Excluir" onPress={removeEcoponto} />
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

export default EditarEcoponto