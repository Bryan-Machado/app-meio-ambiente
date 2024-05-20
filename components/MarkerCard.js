import {Text, View, StyleSheet, Pressable, Image} from 'react-native'
import H4 from './ui/H4'
import { useNavigation } from '@react-navigation/native'

const MarkerCard = ({marker}) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate('Editar', {marker})}>
        <View style={styles.card}>
            <View style={styles.markerImage}>
                <Image
                    style={styles.markerIcon}
                    source={require('../assets/images/marker-icon.png')}
                />
            </View>
            <View>
                <H4>{marker.name}</H4>
                <Text style={styles.email}>{marker.email}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    markerImage: {
        marginHorizontal: 10
    },
    markerIcon: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    email: {
        marginTop: 4
    }
})

export default MarkerCard