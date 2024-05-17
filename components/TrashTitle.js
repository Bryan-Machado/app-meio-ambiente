import { View, Text, Image } from "react-native"

const TrashTitle = ({children, url1}) => {
    return (
        <View style={styles.imageView}>
                <Image
                    source={require(url1)}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.title}>{children}</Text>
        </View>
    )
}



export default TrashTitle