import { StyleSheet, Text, View, Image } from 'react-native';

const DiscardCard = ({ children, ecopontos }) => {
    return (
        <View style={styles.discardCard}>
            <Text style={styles.discardTitle}>{children}</Text>
            <View style={styles.row}>
                {ecopontos.slice(0, 2).map((ecoponto) => (
                    ecoponto.image && (
                        <Image source={{uri: ecoponto.image}} style={styles.trashIcon} />
                    )
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    discardCard: {
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

export default DiscardCard