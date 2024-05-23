import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/ui/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import H1 from '../components/ui/H1.js'

const Cadastrar = () => {
    const navigation = useNavigation()

    const [txtLongitude, setTxtLongitude] = useState('')
    const [txtLatitude, setTxtLatitude] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')
    const [txtEcopontoId, setTxtEcopontoId] = useState('')

    const postUser = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
          const result = await fetch('http://localhost:3333/user', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({longitude: txtLongitude, latitude: txtLatitude, ecoponto_id: txtEcopontoId, categorias: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postUser ' + error.message)
          alert(error.message)
        }
      } 

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setTxtLongitude}
                value={txtLongitude}
                />
                <TextInput 
                style={styles.input}
                placeholder='Latitude...'
                onChangeText={setTxtLatitude}
                value={txtLatitude}
                />
                <TextInput 
                style={styles.input}
                placeholder='Senha...'
                onChangeText={setTxtEcopontoId}
                value={txtEcopontoId}
                />
                <TextInput 
                style={styles.input}
                placeholder='Avatar...'
                onChangeText={setTxtAvatar}
                value={txtAvatar}
                />
                <Button 
                    title="Cadastrar Usuário"
                    onPress={postUser}
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

export default Cadastrar