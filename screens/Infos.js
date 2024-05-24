import { StyleSheet } from 'react-native';
import TrashDescription from '../components/TrashDescription';
import TrashTitle from '../components/TrashTitle';
import EcopontoCard from '../components/EcopontoCard';
import getCategoriasEcopontoByMarkers from '../helpers/getCategoriasEcopontoByMarkers';
import useMarkerStore from '../stores/markerStore';

const Info = ({id, nome, descricao, ecopontoImage, ecopontoTrashAccepted}) => {

  const markers = useMarkerStore((state) => state.markers)

  categorias = getCategoriasEcopontoByMarkers(id, markers)

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TrashTitle url1={ecopontoImage}>{nome}</TrashTitle>

      <TrashDescription>{descricao}</TrashDescription>

      <EcopontoCard trashAccepted={ecopontoTrashAccepted}>Tipos de lixo aceito por este ecoponto:</EcopontoCard>

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

export default Info