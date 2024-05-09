import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
// import { Image as ImageExpo } from 'expo-image'; para quando usarmos fotos não locais

const Lixo = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/images/remedios.jpeg')}
                    resizeMode="stretch"
                    style={styles.image}
                />
                <Text style={styles.title}>Pílulas</Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus in risus ac auctor. Aliquam aliquam eleifend tortor non iaculis. Praesent magna purus, porta quis ultrices vel, hendrerit et ipsum. In placerat convallis risus, vitae egestas libero pretium eu. Integer sed faucibus ipsum. Donec tristique ipsum nunc, ac ultrices urna semper at. Fusce eget euismod magna. Integer eleifend dolor justo, sit amet molestie sem tristique nec. Vivamus vitae euismod velit. Cras auctor elit quis ornare ullamcorper.
                </Text>
            </View>


            <View style={styles.discardCard}>
                <Text style={styles.discardTitle}>Titulo: onde descarta</Text>
                <View style={styles.row}>
                    <Image source={require('../assets/images/icon50x50.jpg')} style={styles.trashIcon}/>
                    <Image source={require('../assets/images/icon50x50.jpg')} style={styles.trashIcon}/>
                    <Image source={require('../assets/images/icon50x50.jpg')} style={styles.trashIcon}/>
                    <Image source={require('../assets/images/icon50x50.jpg')} style={styles.trashIcon}/>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    column: {
        flex: 1,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 350
    },
    column2: {
        flex: 2,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    imageView: {
        backgroundColor: '#f0a',
        width: '100%',
        marginBottom: 100
    },
    image: {
        flex: 1,
        maxHeight: 200,
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: '20%',
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center',
        borderRadius: 10
    },
    paragraph: {
        color: '#000',
        width: '90%',
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 50
    },
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
        borderRadius: '50%'
    }
})

export default Lixo