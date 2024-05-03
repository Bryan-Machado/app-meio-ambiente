import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
// import { Image as ImageExpo } from 'expo-image'; para quando usarmos fotos não locais

const Lixo = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Image 
                        source={require('../assets/images/remedios.jpeg')}
                        resizeMode="center"
                        style={styles.image}
                    />
                </View>
                <View style={styles.column2}>
                    <Text style={styles.title}>Titulo do Lixo</Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus in risus ac auctor. Aliquam aliquam eleifend tortor non iaculis. Praesent magna purus, porta quis ultrices vel, hendrerit et ipsum. In placerat convallis risus, vitae egestas libero pretium eu. Integer sed faucibus ipsum. Donec tristique ipsum nunc, ac ultrices urna semper at. Fusce eget euismod magna. Integer eleifend dolor justo, sit amet molestie sem tristique nec. Vivamus vitae euismod velit. Cras auctor elit quis ornare ullamcorper.
                    </Text>
                </View>
            </View>

            <View>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus in risus ac auctor. Aliquam aliquam eleifend tortor non iaculis. Praesent magna purus, porta quis ultrices vel, hendrerit et ipsum. In placerat convallis risus, vitae egestas libero pretium eu. Integer sed faucibus ipsum. Donec tristique ipsum nunc, ac ultrices urna semper at. Fusce eget euismod magna. Integer eleifend dolor justo, sit amet molestie sem tristique nec. Vivamus vitae euismod velit. Cras auctor elit quis ornare ullamcorper.
                </Text>
                <View>
                    <Text>Titulo: onde descarta</Text>
                    <View>
                        <Text>imagem circular 1</Text>
                        <Text>imagem circular 2</Text>
                        <Text>imagem circular 3</Text>
                        <Text>imagem circular 4</Text>
                        <Text>imagem circular 5</Text>
                    </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#d8f',
        padding: 20
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
    image: {
        flex: 1,
        overflow: 'hidden'
    },
    title: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    paragraph: {
        color: '#000'
    }
})

export default Lixo