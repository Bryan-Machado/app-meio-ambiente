import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

const categoriesList = [
    { id: 1, name: 'Categoria 1' },
    { id: 2, name: 'Categoria 2' },
    { id: 3, name: 'Categoria 3' },
];

const MarkerForm = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [ecopontoId, setEcopontoId] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedCategories(prev => {
            if (prev.includes(id)) {
                return prev.filter(catId => catId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSubmit = () => {
        const data = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            ecoponto_id: parseInt(ecopontoId, 10),
            categories: selectedCategories.map(id => ({ id })),
        };
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <Text>Latitude:</Text>
            <TextInput
                style={styles.input}
                value={latitude}
                onChangeText={setLatitude}
                keyboardType="numeric"
                placeholder="Latitude"
            />

            <Text>Longitude:</Text>
            <TextInput
                style={styles.input}
                value={longitude}
                onChangeText={setLongitude}
                keyboardType="numeric"
                placeholder="Longitude"
            />

            <Text>Ecoponto ID:</Text>
            <TextInput
                style={styles.input}
                value={ecopontoId}
                onChangeText={setEcopontoId}
                keyboardType="numeric"
                placeholder="Ecoponto ID"
            />

            <Text>Categorias:</Text>
            {categoriesList.map(category => (
                <View key={category.id} style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        onClick={() => handleCheckboxChange(category.id)}
                        isChecked={selectedCategories.includes(category.id)}
                        leftText={category.name}
                    />
                </View>
            ))}

            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        flex: 1,
    },
});

export default MarkerForm;
