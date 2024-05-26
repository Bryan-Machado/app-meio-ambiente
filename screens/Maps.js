import { StyleSheet, Text, View, ImageBackground, FlatList, ScrollView } from 'react-native';
import MarkerCard from '../components/MarkerCard'
import useMarkerStore from '../stores/markerStore';
import useCategoriaStore from '../stores/categoriaStore'
import Footer from '../components/Footer';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import Button from '../components/ui/Button'

const Maps = () => {

  const navigation = useNavigation()

  const setCategorias = useCategoriaStore((state) => state.setCategorias)

  const markers = useMarkerStore((state) => state.markers)
  const setMarkers = useMarkerStore((state) => state.setMarkers)

  const getMarkers = async () => {
    try {
      const result = await fetch('http://localhost:3000/marker')
      console.log('primeiro log');
      const data = await result.json()
      setMarkers(data.markers)
    } catch (error) {
      console.log('Error getMarkers ' + error.message)
    }
  }

  const getCategorias = async () => {
    try {
      const result = await fetch('http://localhost:3000/categoria')
      const data = await result.json()
      console.log(data.success)
      setCategorias(data.categorias)
    } catch (error) {
      console.log('Error getCategorias ' + error.message)
    }
  }

  // useFocusEffect(useCallback(() => {
  //   getCategorias(),
  //   getMarkers()
  // }, []))

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/bg-mobile.jpg')}
        style={styles.bg}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.titleAdd}>
            <Text style={styles.usuariosH1}>Localizações de lixos:</Text>
          </View>

          <View style={styles.listUser}>
            {markers?.length ?
              <FlatList
                style={{ width: '100%' }}
                data={markers}
                renderItem={({ item }) => <MarkerCard marker={item} /> }
                keyExtractor={item => item.id}
                ListFooterComponent={Footer}
                contentContainerStyle={styles.flatListMarker}
              /> :
              <Text style={{ color: '#FFF' }}>Carregando...</Text>}
          </View>
          <Button title="Cadastrar novo marker" onPress={() => navigation.navigate('CadastrarMarker')} />
        </View>
      </ImageBackground>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  usuariosH1: {
    marginBottom: 20,
    color: "#FFF",
  },
  listUser: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  titleAdd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  flatListMarker: {
    alignSelf: 'center'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
}
)

export default Maps