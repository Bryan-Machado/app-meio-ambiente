import { View, Text, Image, StyleSheet } from "react-native"

const TrashTitle = ({ children, url1 }) => {
    console.log(url1);
    return (
        <View style={styles.imageView}>
            <Image
                source={{ uri: url1 }}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    column: {
        flex: 1,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 350
    },
    imageView: {
        width: '100%',
        maxHeight: 200,
        marginBottom: 100
    },
    image: {
        width: '100%',
        resizeMode: 'stretch',
        maxHeight: 200
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
    }
})



export default TrashTitle