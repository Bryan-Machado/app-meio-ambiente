import { View, Text, StyleSheet } from "react-native"
import

const Lixo = () => {
    return (
        <View style={styles.container}>
            <View>
                <View><Text>imagem</Text></View>
                <View><Text>texto</Text></View>
            </View>

            <View>
                <Text>paragrafo gigante</Text>
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

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Lixo