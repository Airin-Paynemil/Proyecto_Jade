import React, { useState } from 'react';
import { View, StyleSheet, Alert, FlatList, Text } from 'react-native';

<<<<<<< HEAD
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// src/index.js


=======
>>>>>>> d593275e18bf4e13994f9b341bde93adef00e4e0

const App: React.FC = () => {
  
  

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
     
=======
      {/* Descomentar la línea a continuación si quieres usar el botón */}
      {/* <ButtonCustom title="Me gusta" onPress={handlePress} /> */}
      
      
>>>>>>> d593275e18bf4e13994f9b341bde93adef00e4e0
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


export default App;
