import { StyleSheet, ScrollView } from "react-native"
import DiscardCard from "../components/discardCard"
import TrashDescription from "../components/TrashDescription"
import TrashTitle from "../components/TrashTitle"
// import { Image as ImageExpo } from 'expo-image'; para quando usarmos fotos não locais

const Lixo = ({trashName, trashTitleImage, trashDescriptionParagraph,  discardCard}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <TrashTitle url1={trashTitleImage}>{trashName}</TrashTitle>
            
            <TrashDescription>{trashDescriptionParagraph}</TrashDescription>

            <DiscardCard url1={discardCard.url1} 
                         url2={discardCard.url2} 
                         url3={discardCard.url3}>{discardCard.title}</DiscardCard>

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