import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/app/src/componentes/EditScreenInfo';
import { Text, View } from '@/app/src/componentes/Themed';
import Login from '@/app/src/componentes/login';
// src/index.js



export default function TabOneScreen() {
  return (
    <View style={styles.container}>

     <Login/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
