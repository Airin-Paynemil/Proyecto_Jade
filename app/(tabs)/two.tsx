import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Login from '@/components/login'; // Mantengo este import basado en la versión original

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>wii</Text> {/* Puedes cambiar el texto si prefieres */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <Login /> {/* Agregué el componente Login según la versión original */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC', // Corregí el formato del color, falta el '#'
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
