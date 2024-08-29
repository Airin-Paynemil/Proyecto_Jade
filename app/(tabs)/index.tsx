import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, Animated, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = 200; // Ancho de cada imagen
  const SPACING = 10; // Espacio entre las imágenes

  const images = [
    { id: '1', uri: require('@/assets/images/imagen1.jpg') },
    { id: '2', uri: require('@/assets/images/imagen2.jpg') },
    { id: '3', uri: require('@/assets/images/imagen3.jpg') },
  ];
  
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.carousel, { width: SLIDER_WIDTH }]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {images.map((image, index) => {
          const inputRange = [
            (index - 1) * (ITEM_WIDTH + SPACING),
            index * (ITEM_WIDTH + SPACING),
            (index + 1) * (ITEM_WIDTH + SPACING),
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <View key={image.id} style={[styles.imageContainer, { width: ITEM_WIDTH + SPACING }]}>
              <Animated.Image
                source={image.uri } 
                style={[styles.image, { transform: [{ scale }], opacity }]}
                resizeMode="cover"
              />

            </View>
          );
        })}
      </ScrollView>
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
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  carousel: {
    flexGrow: 0, 
    height: 350, 
  },
  imageContainer: {
    marginLeft: '40%', 
    marginRight: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5, 
  },
  image: {
    width: 200,
    height: 340, 
    borderRadius: 15,
  },
});

export default App;
