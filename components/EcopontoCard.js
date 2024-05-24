import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EcopontoCard = ({ children, trashAccepted }) => {
    console.log(trashAccepted)

    const navigation = useNavigation()

    return (
        <View style={styles.ecopontoCard}>
            <Text style={styles.discardTitle}>{children}</Text>
            <View style={styles.row}>
            {trashAccepted.slice(0, 2).map((trash, index) => (
                <Pressable key={index} onPress={() => navigation.navigate('Lixo', {categoria: trash})}>
                    <View key={index} style={styles.trashContainer}>
                        {trash.imagemurl ? (
                            <Image source={{ uri: trash.imagemurl }} style={styles.trashIcon} />
                        ) : (<Text>Esse lixo não possui imagem</Text>)}
                        {trash.nome ? (
                            <Text style={styles.paragraph}>{trash.nome}</Text>
                        ) : (<Text>Esse lixo não possui título</Text>)}
                    </View>
                </Pressable>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ecopontoCard: {
        width: '100%',
        paddingBottom: 20
    },
    discardTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#d8f',
        marginTop: 20
    },
    trashIcon: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
})

export default EcopontoCard