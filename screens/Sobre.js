import { StyleSheet, ScrollView, Text, View, Image, ImageBackground } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        resizeMode="cover"
        source={require('../assets/images/bg-mobile.jpg')}
        style={styles.bg}
      >

        <View>
          <Text>O que é a NatureApps?</Text>
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>

        <View style={styles.devs}>
          <View style={styles.singularDev}>
            <Image source={require('../assets/images/bryan.jpg')}/>
            <Text>Bryan Machado</Text>
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
      flex: 1,
      maxHeight: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
    }
  });

export default About