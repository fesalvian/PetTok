// SplashScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('./img/logo.png')} // Imagem do logotipo
        style={styles.splashImage}
      />
      <Image
        source={require('./img/PetTok.png')} // Imagem do texto
        style={styles.textImage} // Novo estilo para o texto
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#77AFDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  textImage: {
    width: 160, // Ajuste a largura conforme necessário
    height: 60,  // Ajuste a altura conforme necessário
    resizeMode: 'contain',
  },
});
