import {View, StyleSheet, ScrollView, TextInput} from 'react-native'
import Button from '../components/ui/Button'
import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import useMarkerStore from '../stores/markerStore';


const EditarMarker = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const removeMarkerStore = useMarkerStore(state => state.removeMarker)
  const updateMarker = useMarkerStore(state => state.updateUser)

  const {marker} = route.params

  const [latitude, setLatitude] = useState(marker.latitude);
  const [longitude, setLongitude] = useState(marker.longitude);
  const [ecopontoId, setEcopontoId] = useState(marker.ecoponto_id);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const editMarker = async () =>{
      try{
        const result = await fetch('http://localhost:3000/marker/'+user.id, {
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
        })
        const data = await result.json()
        console.log(data.marker)
        if(data?.success){
          //update do marker na store com o data.user
          updateMarker(data.user)
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error edit ' + error.message)
        alert(error.message)
      }
    } 

    const removeMarker = async () =>{
      try{
        const result = await fetch('http://localhost:3333/user/'+user.id, {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          }
        })
        const data = await result.json()
        console.log(data)
        if(data?.success){
          removeMarkerStore(user.id)
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error removeMarker ' + error.message)
        alert(error.message)
      }
    } 

    return (
      <View style={styles.container}>
        <Text>Latitude:</Text>
        <TextInput
          style={styles.input}
          value={latitude}
          onChangeText={setLatitude}
          keyboardType="numeric"
          placeholder="Latitude"
        />
  
        <Text>Longitude:</Text>
        <TextInput
          style={styles.input}
          value={longitude}
          onChangeText={setLongitude}
          keyboardType="numeric"
          placeholder="Longitude"
        />
  
        <Text>Ecoponto ID:</Text>
        <TextInput
          style={styles.input}
          value={ecopontoId}
          onChangeText={setEcopontoId}
          keyboardType="numeric"
          placeholder="Ecoponto ID"
        />
  
        <Text>Categorias:</Text>
        {categorias.map((category) => (
          <View key={category.id} style={styles.checkboxContainer}>
            <Checkbox
              value={selectedCategories.includes(category.id)}
              onValueChange={() => handleCheckboxChange(category.id)}
              style={styles.checkbox}
            />
            <Text>{category.name}</Text>
          </View>
        ))}
  
        <Button title="Editar" onPress={editMarker} />
        <Button title="Excluir" onPress={removeMarker} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 8,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkbox: {
      marginRight: 8,
    },
  });

export default EditarMarker