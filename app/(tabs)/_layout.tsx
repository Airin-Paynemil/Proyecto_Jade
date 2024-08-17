import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '@/components/SearchBar';
import Carousel from 'react-native-snap-carousel';

const iconColor = '#ecd4ea'; // Define el color deseado para los iconos
const pressedColor = '#511f52'; // Color para el icono cuando se presiona

// Componente para los íconos de la barra de navegación
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Componente del carrusel de imágenes
const { width: viewportWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  imageUrl: string;
}

const data: CarouselItem[] = [
  { title: 'Primera imagen', imageUrl: 'https://via.placeholder.com/600x400' },
  { title: 'Segunda imagen', imageUrl: 'https://via.placeholder.com/600x400' },
  { title: 'Tercera imagen', imageUrl: 'https://via.placeholder.com/600x400' },
];

const renderItem = ({ item }: { item: CarouselItem }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={{ uri: item.imageUrl }} style={{ width: viewportWidth, height: 200 }} />
      <Text style={{ marginTop: 10, fontSize: 16 }}>{item.title}</Text>
    </View>
  );
};

const ImageCarousel: React.FC = () => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
      layout={'default'}
    />
  );
};

// Componente principal que incluye la barra de navegación y el carrusel
export default function TabLayout() {
  const colorScheme = useColorScheme();

  const handleSearch = (query: string) => {
    // Lógica de búsqueda
    console.log('Buscando:', query);
  };

  return (
    <>
      <View style={{ padding: 10 }}>
        <SearchBar onSearch={handleSearch} />
      </View>

      <ImageCarousel />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: iconColor, // Usa el color definido para el icono activo
          tabBarInactiveTintColor: iconColor, // Usa el color definido para el icono inactivo
          headerShown: useClientOnlyValue(true, true),
          tabBarShowLabel: false, // Oculta las etiquetas de texto de los botones
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size }) => (
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={pressed ? pressedColor : iconColor}
                    size={size}
                  />
                )}
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            tabBarIcon: ({ size }) => (
              <Pressable>
                {({ pressed }) => (
                  <TabBarIcon
                    name="book"
                    color={pressed ? pressedColor : iconColor}
                  />
                )}
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="categoria"
          options={{
            tabBarIcon: ({ size }) => (
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="menu"
                    color={pressed ? pressedColor : iconColor}
                    size={size}
                  />
                )}
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="usuario"
          options={{
            tabBarIcon: ({ size }) => (
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="map"
                    color={pressed ? pressedColor : iconColor}
                    size={size}
                  />
                )}
              </Pressable>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
