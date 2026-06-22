
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card'; 

const DATA = [
  { id: '1', title: 'ANDRONIS LYCABETTUS', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1' },
  { id: '2', title: 'THE ATHENIAN HOUSE', image: 'https://i.pinimg.com/1200x/34/7b/93/347b93b4fcc826a4325f3a97a45eff63.jpg' },
  { id: '3', title: 'BEEFBAR SANTORINI', image: 'https://i.pinimg.com/1200x/3a/93/e1/3a93e170828d37b8d1f0ebfa5a9b98d0.jpg' },
  { id: '4', title: 'FIVES SENSES RESTAURANT', image: 'https://i.pinimg.com/736x/9a/d4/a3/9ad4a3e2acaa62b6b8c7cf80f4f6f325.jpg' },
];

export default function ListScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <Card 
      title={item.title} 
      imageUrl={item.image} 
      onPress={() => console.log(`Navegar para detalhes de: ${item.title}`)} 
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <Text style={styles.headerText}>RESTAURANTES</Text>
      </View>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBanner: {
    backgroundColor: '#5C82A6',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  headerText: { color: '#fff', fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 10 },
});