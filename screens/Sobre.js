import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <>
        <View style={styles.container}>
        <Text>Olá Mundo!!!!</Text>
        <StatusBar style="auto" />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default About