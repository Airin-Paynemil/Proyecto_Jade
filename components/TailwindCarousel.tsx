import React from 'react';
import { View } from 'react-native';
import TailwindCarousel from './TailwindCarousel';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <TailwindCarousel />
    </View>
  );
};

export default App;
