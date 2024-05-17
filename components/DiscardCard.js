import { StyleSheet, Text, View, Image } from 'react-native';

const DiscardCard = ({children, url1, url2, url3}) => {
    return (
        <View style={styles.discardCard}>
                <Text style={styles.discardTitle}>{children}</Text>
                <View style={styles.row}>
                    <Image source={require(url1)} style={styles.trashIcon}/>
                    <Image source={require(url2)} style={styles.trashIcon}/>
                    <Image source={require(url3)} style={styles.trashIcon}/>
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