// MainScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    user: 'Luke the hedgehog',
    image: 'data:image/jpeg;base64,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',
    likes: 8356,
    comments: 863,
    description: 'Hi everyone 🦔📸',
  },
  // Adicione mais postagens conforme necessário
];

const MainScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.suggestion}>Suggestion for you</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <Ionicons name="heart" size={40} color="black" style={styles.icons} />
        <Ionicons name="chatbubble-outline" size={40} color="black" style={styles.icons}/>
        <Ionicons name="bookmark-outline" size={40} color="black" style={styles.icons}/>
        <Text style={styles.likes}>Liked by {item.likes} others</Text>
        <Text style={styles.description}>{item.user} {item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>PetTok</Text>
        <Ionicons name="search" size={30} color="#E5E6E2" />
        <Ionicons name="send-outline" size={30} color="#E5E6E2"/>
      </View>

      {/* Feed */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={40} color="#E5E6E2" />
        <Ionicons name="phone-portrait-outline" size={40} color="#E5E6E2"/>
        <Ionicons name="add-circle-outline" size={40} color="#E5E6E2" />
        <Ionicons name="notifications-outline" size={40} color="#E5E6E2" />
        <Ionicons name="person-circle-outline" size={40} color="#E5E6E2" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: '100%'
  },
  header: {
    marginTop:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#92BFDC',
    height: 60
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  suggestion: {
    color: 'gray',
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  postFooter: {
    padding: 20,
  },
  icons:{
    flexDirection: 'row', // Coloca os itens em linha
  },

  likes: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    paddingBottom:40,
    backgroundColor: '#77AFDA',
  },
});

export default MainScreen;
