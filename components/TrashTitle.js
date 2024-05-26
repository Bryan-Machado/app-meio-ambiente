import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image";

const TrashTitle = ({ children, url1 }) => {
    console.log(url1);
    return (
        <View style={styles.imageView}>
            <Image
                source={url1}
                contentFit="contain"
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
        minHeight: 200,
        marginBottom: 100
    },
    image: {
        flex: 1,
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