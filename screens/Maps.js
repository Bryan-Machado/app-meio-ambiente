import { StyleSheet, Text, View } from 'react-native';
import useCategoriaStore from '../stores/categoriaStore';
import Footer from '../components/Footer';

const Maps = () => {

  const users = useUserStore((state) => state.users)
  const setUsers = useUserStore((state) => state.setUsers)

  const categorias = useCategoriaStore((state) => state.categorias)
  const setCategorias = useCategoriaStore((state) => state.setCategorias)

  const markers = useCategoriaStore((state) => state.markers)
  const setMarkers = useCategoriaStore((state) => state.setMarkers)

  const ecopontos = useCategoriaStore((state) => state.ecopontos)
  const setEcopontos = useCategoriaStore((state) => state.setEcopontos)

  const getMarkers = async () => {
    try {
      const result = await fetch('http://localhost:3000/marker')
      const data = await result.json()
      console.log(data.success)
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
      setUsers(data.categorias)
    } catch (error) {
      console.log('Error getCategorias ' + error.message)
    }
  }

  useEffect(() => {
    getMarkers(),
    getCategorias()
  }, [])

  return (
    <View>
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
            {markers.length ?
              <FlatList
                style={{ width: '100%' }}
                data={markers}
                renderItem={({ item }) => <MarkerCard marker={item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={Footer}
                contentContainerStyle={styles.flatListMarker}
              /> :
              <Text style={{ color: '#FFF' }}>Carregando...</Text>}
          </View>
        </View>
      </ImageBackground>
    </View>

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
  }
}
)

export default Maps