import { StyleSheet, Button, TouchableHighlight } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Login from '@/components/login'; 

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
      <View style={styles.separatorVertical} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.barraContainer}>
        <TouchableHighlight onPress={() => alert('aca van los favoritos')}>
          <Text style={styles.barra}>Favoritos</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => alert('aca van los me gusta')}>
          <Text style={styles.barra}>Me Gusta</Text>
        </TouchableHighlight>
      </View>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <Login /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ECECEC', 
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separatorVertical: {
    marginVertical: 10,
    height: 1,
    textAlign: 'center',
  },
  barraContainer: {
    backgroundColor: "rgba(89, 17, 81,0.8)",
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-around",
  },
  barra: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    flexBasis: 'auto',
    paddingVertical: 10,
  }
});
