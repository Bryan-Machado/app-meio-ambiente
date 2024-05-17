import { View, Text, StyleSheet } from "react-native"

const TrashDescription = ({children}) => {
    return (
        <View style={{width: '100%'}}>
                <Text style={styles.paragraph}>
                    {children}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        color: '#000',
        width: '90%',
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 50
    }
})

export default TrashDescription