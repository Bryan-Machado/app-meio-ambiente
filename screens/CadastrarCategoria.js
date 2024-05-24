import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation } from '@react-navigation/native'

const CadastrarCategoria = () => {
    const navigation = useNavigation()
    const addCategoria = useCategoriaStore((state) => state.addCategoria)


    const [txtName, setTxtName] = useState('')
    const [txtDescricao, setTxtDescricao] = useState('')

    const postCategoria = async () =>{
        try{
          const result = await fetch('http://localhost:3000/categoria', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({nome: txtName, descricao: txtDescricao })
          })
          const data = await result.json()
          addCategoria(data.categoria)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postCategoria ' + error.message)
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
                placeholder='Descrição...'
                onChangeText={setTxtDescricao}
                value={txtDescricao}
                />
                <Button 
                    title="Cadastrar categoria"
                    onPress={postCategoria}
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

export default CadastrarCategoria