import { StyleSheet, ScrollView, Text, View, Image, ImageBackground } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/bg-mobile.jpg')}
        style={styles.bg}
      >

        <View style={styles.viewParagraph}>
          <Text style={styles.title}>O que é a NatureApps?</Text>
          <Text style={styles.paragraph}>A NatureApps é uma empresa feita para aumentar a conscientização da sociedade sobre as necessidades de cuidarmos da natureza. Criamos aplicativos para a conscientização, e para ajudar os funcionários que já trabalham no meio ecológico</Text>
        </View>

        <View style={styles.devs}>
          <View style={styles.singularDev}>
            <Image source={require('../assets/images/bryan.jpg')} style={styles.devImage}/>
            <Text style={styles.devName}>Bryan Machado</Text>
          </View>

          {/* <View style={styles.singularDev}>
            <Image source={require()}/>
            <Text></Text>
          </View>

          <View style={styles.singularDev}>
            <Image source={require()}/>
            <Text></Text>
          </View> */}
          
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    bg: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewParagraph: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      width: '90%',
      alignSelf: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#333',
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      color: '#666',
    },
    devs: {
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    },
    singularDev: {
      alignItems: 'center',
      margin: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      padding: 20,
      alignSelf: 'center'
    },
    devImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    devName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
  });

export default About