import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '@/components/SearchBar'; // Importa el componente de barra de búsqueda

const iconColor = '#ecd4ea'; // Define el color deseado para los iconos
const pressedColor = '#511f52'; // Color para el icono cuando se presiona

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const handleSearch = (query: string) => {
    // Aquí puedes manejar la lógica de búsqueda
    console.log('Buscando:', query);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: iconColor, // Usa el color definido para el icono activo
        tabBarInactiveTintColor: iconColor, // Usa el color definido para el icono inactivo
        headerShown: useClientOnlyValue(true, true),
        header: () => (
          <View style={{ padding: 10 }}>
            <SearchBar onSearch={handleSearch} />
          </View>
        ),
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
  );
}
