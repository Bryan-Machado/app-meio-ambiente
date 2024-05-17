import { StyleSheet, Text, View, Image } from 'react-native';

const EcopontoCard = ({ children, trashAccepted }) => {
    return (
        <View style={styles.ecopontoCard}>
            <Text style={styles.discardTitle}>{children}</Text>
            <View style={styles.row}>
            {trashAccepted.slice(0, 2).map((trash, index) => (
                <View key={index} style={styles.trashContainer}>
                    {trash.url ? (
                        <Image source={{ uri: trash.url }} style={styles.trashIcon} />
                    ) : (<Text>Esse lixo não possui imagem</Text>)}
                    {trash.paragraph ? (
                        <Text style={styles.paragraph}>{trash.paragraph}</Text>
                    ) : (<Text>Esse lixo não possui título</Text>)}
                </View>
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