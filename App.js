// App.js
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Animated, Text } from 'react-native';
import SplashScreen from './src/SplashScreen';
import MainScreen from './src/MainScreen';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(1)); // Inicializa a animação com opacidade 1

  useEffect(() => {
    const timer = setTimeout(() => {
      // Inicia a animação de fade-out
      Animated.timing(fadeAnim, {
        toValue: 0, // Muda a opacidade para 0
        duration: 500, // Duração da animação em milissegundos
        useNativeDriver: true, // Melhora a performance
      }).start(() => {
        setIsSplashVisible(false); // Depois que a animação termina, oculta a splash screen
      });
    }, 2000); // Tempo que a splash screen será exibida

    return () => clearTimeout(timer); // Limpa o timer
  }, [fadeAnim]);

  if (isSplashVisible) {
    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <SplashScreen /> 
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao App</Text>
      <StatusBar style="light" backgroundColor="#77AFDA"/>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77AFDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
