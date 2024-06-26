import { StyleSheet, ScrollView, Pressable, Text } from "react-native"
import DiscardCard from "../components/DiscardCard"
import TrashDescription from "../components/TrashDescription"
import TrashTitle from "../components/TrashTitle"
import { useNavigation, useRoute } from "@react-navigation/native"
import getEcopontosByCategoria from "../helpers/getEcopontosByCategoria"
import useMarkerStore from "../stores/markerStore"
import Button from "../components/ui/Button"
// import { Image as ImageExpo } from 'expo-image'; para quando usarmos fotos não locais

const Lixo = () => {
    const navigation = useNavigation()

    const markers = useMarkerStore(state => state.markers)

    const route = useRoute()
    const { categoria } = route.params
    const { id, nome, imagemurl, descricao } = categoria
    const ecopontos = getEcopontosByCategoria(id, markers)

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <TrashTitle url1={imagemurl}>{nome}</TrashTitle>

            <TrashDescription>{descricao}</TrashDescription>

            <DiscardCard ecopontos={ecopontos}>Esse tipo de lixo possui os seguintes ecopontos como seus principais coletores:</DiscardCard>

            <Button title="Editar categoria" onPress={() => navigation.navigate('EditarCategoria', {categoria})}/>
            
            <Button title="Cadastrar nova categoria" onPress={() => navigation.navigate('CadastrarCategoria')}/>

        </ScrollView>
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

export default Lixo