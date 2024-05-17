import { StyleSheet } from 'react-native';
import TrashDescription from '../components/TrashDescription';
import TrashTitle from '../components/TrashTitle';
import EcopontoCard from '../components/EcopontoCard';

const Info = ({ecopontoImage, ecopontoName, ecopontoDescription, ecopontoTrashAccepted}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TrashTitle url1={ecopontoImage}>{ecopontoName}</TrashTitle>

      <TrashDescription>{ecopontoDescription}</TrashDescription>

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