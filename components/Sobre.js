import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    <>
        <View style={styles.container}>
        <Text>Olá Mundo!!!!</Text>
        <StatusBar style="auto" />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default About