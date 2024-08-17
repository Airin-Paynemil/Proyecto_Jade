import React, { useState } from 'react';
import { View, StyleSheet, Alert, FlatList, Text } from 'react-native';


const App: React.FC = () => {
  
  

  return (
    <View style={styles.container}>
      {/* Descomentar la línea a continuación si quieres usar el botón */}
      {/* <ButtonCustom title="Me gusta" onPress={handlePress} /> */}
      
      
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
