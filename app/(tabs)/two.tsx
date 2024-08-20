
import { StyleSheet, TouchableHighlight} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

//pantalla de biblioteca
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
    barraContainer:{
    flexDirection:"row",
    width: '100%',
    justifyContent:"space-around",
    },
  barra:{
    backgroundColor: "rgba(89, 17, 81,0.8)",
    alignContent: 'center',
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    width: 200,
  }
});
