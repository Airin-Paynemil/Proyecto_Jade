import React from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native'; // Asegúrate de importar esto si usas 'StyleSheet'

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>holi</Text>
      <View style={styles.separator} lightColor="#eeee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
     
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default App;

