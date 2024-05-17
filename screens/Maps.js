import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Maps = () => {
  const navigation = useNavigation()

  const users = useUserStore((state) => state.users)
  const setUsers = useUserStore((state) => state.setUsers)
  const logout = useUserLoggedStore(state => state.logout)

  console.log('Plataforma Atual: ', Platform.OS)

  const getUsers = async () => {
    try {
      //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user')
      const result = await fetch('http://localhost:3333/user')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error) {
      console.log('Error getUsers ' + error.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userLogged')
      logout()
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
      alert('Erro ao fazer logout!')
    }
  }

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
            {users.length ?
              <FlatList
                style={{ width: '100%' }}
                data={users}
                renderItem={({ item }) => <CardUser user={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                contentContainerStyle={styles.flatListMarker}
              /> :
              <Text style={{ color: '#FFF' }}>Loading...</Text>}
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
    marginBottom: 20,
    maxHeight: Platform.OS === 'web' ? '90vh' : null
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