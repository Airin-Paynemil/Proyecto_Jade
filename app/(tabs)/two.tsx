import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
<<<<<<< HEAD
import Login from '@/components/login';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      
=======
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>wii</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
>>>>>>> d593275e18bf4e13994f9b341bde93adef00e4e0
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ECECEC',
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
