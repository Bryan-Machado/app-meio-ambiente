import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'

const CadastrarEcoponto = () => {
    const navigation = useNavigation()

    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtTelefone, setTxtTelefone] = useState('')
    const [txtCnpj, setTxtCnpj] = useState('')
    const [txtDescricao, setTxtDescricao] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')

    const postEcoponto = async () =>{
        try{
          const result = await fetch('http://localhost:3000/ecoponto', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({nome: txtName, email: txtEmail, cnpj: txtCnpj, telefone: txtTelefone, descricao: txtDescricao, imageurl: imagemUrl })
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postEcoponto ' + error.message)
          alert(error.message)
        }
      } 

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
                    title="Cadastrar Ecoponto"
                    onPress={postEcoponto}
                />
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

export default CadastrarEcoponto