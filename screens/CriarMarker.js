import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation} from '@react-navigation/native';
import useCategoriaStore from '../stores/categoriaStore';

const CriarMarker = () => {
  const navigation = useNavigation()
  const categorias = useCategoriaStore((state) => state.categorias)

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [ecopontoId, setEcopontoId] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedCategories((prev) => {
      if (prev.includes(id)) {
        return prev.filter((catId) => catId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const postMarker = async () => {
    try {
      const data = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        ecoponto_id: parseInt(ecopontoId, 10), // Base 10 significa decimal
        categorias: selectedCategories.map((id) => ({ id })),
      };
      console.log(data);
      const result = await fetch('http://localhost:3000/marker', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const response = await result.json()
      console.log(response)

      if (response?.success) {
        navigation.goBack()
      } else {
        alert(data.error)
      }
      
    } catch (error) {
      console.log('Error postMarker ' + error.message)
      alert(error.message)
    }
  };

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
          <Text>{category.nome}</Text>
        </View>
      ))}

      <Button title="Cadastrar" onPress={postMarker} />
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

export default CriarMarker;