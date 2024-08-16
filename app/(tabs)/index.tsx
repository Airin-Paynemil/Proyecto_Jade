import React, { useState } from 'react';
import { View, StyleSheet, Alert, FlatList, Text } from 'react-native';
import ButtonCustom from '@/components/boton';
import SearchBar from '@/components/SearchBar';

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handlePress = () => {
    Alert.alert('Botón presionado!');
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <View style={styles.container}>
      {/* Descomentar la línea a continuación si quieres usar el botón */}
      {/* <ButtonCustom title="Me gusta" onPress={handlePress} /> */}
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});

const data = [
  { id: 1, name: 'Atraves de mi ventana' },
  { id: 2, name: 'a dos metro de ti' },
  { id: 3, name: 'bajo la misma estrella' },
  { id: 4, name: 'culpa mia' },
  { id: 5, name: 'culpa de nosotros' },
];

export default App;
