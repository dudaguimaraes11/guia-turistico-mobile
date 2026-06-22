
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Card from '../components/Card'; 

const CATEGORIES = ['Todos', 'Vilas', 'Natureza', 'História', 'Praias'];

const DATA = [
  { id: '1', title: 'Vulcão em Santorini', category: 'Natureza', image: 'https://i.pinimg.com/736x/25/6d/76/256d762e2437bde3694aa98114986bed.jpg' },
  { id: '2', title: 'Catedral São João B.', category: 'História', image: 'https://i.pinimg.com/1200x/cb/0a/3b/cb0a3b434f1d5c6f8a91f271806907ef.jpg' },
  { id: '3', title: 'Vila Oia', category: 'Vilas', image: 'https://i.pinimg.com/736x/de/15/16/de1516e0d6f2395cc4c1fe6fedf64dd3.jpg' },
  { id: '4', title: 'Sítio Akrotiri', category: 'História', image: 'https://i.pinimg.com/1200x/d6/31/3a/d6313a1271fafa67cdcc8539f5267bec.jpg' },
  { id: '5', title: 'Fira Town', category: 'Vilas', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600' },
  { id: '6', title: 'Imerovigli', category: 'Vilas', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600' },
  { id: '7', title: 'Farol de Akrotiri', category: 'História', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=600' },
  { id: '8', title: 'Praia de Kamari', category: 'Praias', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600' },
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
        <Text style={styles.headerSubtitle}>SANTORINI, GRÉCIA</Text>
        <Text style={styles.headerTitle}>Pontos Turísticos</Text>
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