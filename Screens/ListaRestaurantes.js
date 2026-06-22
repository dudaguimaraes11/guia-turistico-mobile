
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Card from '../components/Card'; 

const CATEGORIES = ['Todos', 'Fina Gastronomia', 'À Beira-Mar', 'Casual'];

const DATA = [
  { id: '1', title: 'Amoudi Bay', category: 'À Beira-Mar', image: 'https://i.pinimg.com/736x/05/1a/14/051a1469c47baa820183a38d7e70ce67.jpg' },
  { id: '2', title: 'The Athenian House', category: 'Fina Gastronomia', image: 'https://santorinidave.com/wp-content/uploads/2020/08/santorini-athenian-house-sunset.jpg' },
  { id: '3', title: 'Beefbar Santorini', category: 'Fina Gastronomia', image: 'https://i.pinimg.com/736x/b8/e7/ce/b8e7ceb8b161e3bc7c08f7d992a5643a.jpg' },
  { id: '4', title: 'Five Senses', category: 'Fina Gastronomia', image: 'https://i.pinimg.com/736x/9a/d4/a3/9ad4a3e2acaa62b6b8c7cf80f4f6f325.jpg' },
  { id: '5', title: 'Sunset Ammoudi', category: 'À Beira-Mar', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600' },
  { id: '6', title: 'Metaxi Mas', category: 'Casual', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600' },
  { id: '7', title: 'Lycabettus', category: 'Fina Gastronomia', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600' },
  { id: '8', title: 'Lucky\'s Souvlakis', category: 'Casual', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600' },
];

export default function ListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredData = selectedCategory === 'Todos' 
    ? DATA 
    : DATA.filter(item => item.category === selectedCategory);

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <Card 
        title={item.title} 
        imageUrl={item.image} 
        onPress={() => console.log(`Navegar para detalhes de: ${item.title}`)} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>GASTRONOMIA GREGA</Text>
        <Text style={styles.headerTitle}>Restaurantes</Text>
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={[styles.categoryButton, isActive && styles.categoryButtonActive]}
              >
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  headerSubtitle: {
    color: '#8E9AA6',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },
  headerTitle: { 
    color: '#1A2E40', 
    fontWeight: '800', 
    fontSize: 28,
    letterSpacing: -0.5,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryList: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F2F5F8',
  },
  categoryButtonActive: {
    backgroundColor: '#2A4E6C',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#627D93',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  listContainer: { 
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 16,
  }
});