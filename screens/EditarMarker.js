import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox'; // Certifique-se de instalar a biblioteca expo-checkbox
import Button from '../components/ui/Button';
import useMarkerStore from '../stores/markerStore';
import useCategoriaStore from '../stores/categoriaStore';

const EditarMarker = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const removeMarkerStore = useMarkerStore((state) => state.removeMarker);
  const updateMarker = useMarkerStore((state) => state.updateMarker);

  const { marker } = route.params;
  const categorias = useCategoriaStore((state) => state.categorias)

  const [latitude, setLatitude] = useState(marker.latitude);
  const [longitude, setLongitude] = useState(marker.longitude);
  const [ecopontoId, setEcopontoId] = useState(marker.ecoponto_id);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const markerCategories = marker.marker_has_categoria.map((item) => item.categoria.id);
    setSelectedCategories(markerCategories);
  }, [marker]);

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const editMarker = async () => {
    try {
      const result = await fetch('http://localhost:3000/marker/' + marker.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
          ecoponto_id: ecopontoId,
          categories: selectedCategories,
        }),
      });
      const data = await result.json();
      console.log(data.marker);
      if (data?.success) {
        // update do marker na store com o data.marker
        updateMarker(data.marker);
        navigation.goBack();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log('Error edit ' + error.message);
      alert(error.message);
    }
  };

  const removeMarker = async () => {
    try {
      const result = await fetch('http://localhost:3000/marker/' + marker.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await result.json();
      console.log(data);
      if (data?.success) {
        removeMarkerStore(marker.id);
        navigation.goBack();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log('Error removeMarker ' + error.message);
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Latitude:</Text>
      <TextInput
        style={styles.input}
        value={latitude.toString()}
        onChangeText={setLatitude}
        keyboardType="numeric"
        placeholder="Latitude"
      />

      <Text>Longitude:</Text>
      <TextInput
        style={styles.input}
        value={longitude.toString()}
        onChangeText={setLongitude}
        keyboardType="numeric"
        placeholder="Longitude"
      />

      <Text>Ecoponto ID:</Text>
      <TextInput
        style={styles.input}
        value={ecopontoId.toString()}
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

      <Button title="Editar" onPress={editMarker} />
      <Button title="Excluir" onPress={removeMarker} />
    </ScrollView>
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

export default EditarMarker;