import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Card from '../components/Card'; 

const CATEGORIES = ['Todos', 'Vilas', 'Natureza', 'História', 'Praias'];

const DATA = [
  { 
    id: '1', 
    title: 'Vulcão em Santorini', 
    category: 'Natureza', 
    image: 'https://i.pinimg.com/736x/25/6d/76/256d762e2437bde3694aa98114986bed.jpg',
    localizacao: 'Caldeira de Santorini, Mar Egeu',
    saida: 'Porto antigo de Fira ou Imerovigli de barco',
    duracao: '4 a 6 horas',
    destaques: ['• Trilhas formadas por rochas vulcânicas', '• Vista panorâmica de Santorini', '• Experiência única com vulcão ativo']
  },
  { 
    id: '2', 
    title: 'Catedral São João B.', 
    category: 'História', 
    image: 'https://i.pinimg.com/1200x/cb/0a/3b/cb0a3b434f1d5c6f8a91f271806907ef.jpg',
    localizacao: 'Fira Centro',
    saida: 'Acesso direto a pé pelas ruas centrais de Fira',
    duracao: '1 a 2 horas',
    destaques: ['• Arquitetura barroca deslumbrante', '• Pinturas religiosas e afrescos históricos', '• Localizada no ponto mais movimentado da ilha']
  },
  { 
    id: '3', 
    title: 'Vila Oia', 
    category: 'Vilas', 
    image: 'https://i.pinimg.com/736x/de/15/16/de1516e0d6f2395cc4c1fe6fedf64dd3.jpg',
    localizacao: 'Extremo norte de Santorini',
    saida: 'Estacionamento central de Oia ou ônibus local',
    duracao: 'Livre (Recomendado fim da tarde)',
    destaques: ['• As famosas igrejas de cúpula azul', '• O pôr do sol mais icônico do mundo', '• Ruelas charmosas com lojinhas artesanais']
  },
  { 
    id: '4', 
    title: 'Sítio Akrotiri', 
    category: 'História', 
    image: 'https://i.pinimg.com/1200x/d6/31/3a/d6313a1271fafa67cdcc8539f5267bec.jpg',
    localizacao: 'Região sul de Santorini',
    saida: 'Entrada principal do Parque Arqueológico',
    duracao: '2 a 3 horas',
    destaques: ['• Ruínas da antiga civilização Minoica', '• Cidade preservada por cinzas vulcânicas', '• Estruturas cobertas ideais para dias quentes']
  },
  { 
    id: '5', 
    title: 'Fira Town', 
    category: 'Vilas', 
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600',
    localizacao: 'Centro de Santorini',
    saida: 'Terminal rodoviário central de Fira',
    duracao: 'Livre',
    destaques: ['• Capital vibrante cheia de restaurantes', '• Teleférico com descida para o porto velho', '• Mirantes perfeitos para fotos da Caldeira']
  },
  { 
    id: '6', 
    title: 'Imerovigli', 
    category: 'Vilas', 
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600',
    localizacao: 'Entre Fira e Oia',
    saida: 'Acesso pela passarela de pedestres da Caldeira',
    duracao: '2 a 3 horas',
    destaques: ['• Conhecida como a "varanda de Santorini"', '• Atmosfera muito mais calma e reservada', '• Caminhada até a famosa rocha Skaros Rock']
  },
  { 
    id: '7', 
    title: 'Farol de Akrotiri', 
    category: 'História', 
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=600',
    localizacao: 'Extremo sul da ilha',
    saida: 'Acesso de carro ou quadriciclo até o topo do penhasco',
    duracao: '1 hora',
    destaques: ['• Um dos faróis mais antigos do país', '• Vista limpa e sem barreiras para o mar', '• Pôr do sol incrível fugindo das multidões']
  },
  { 
    id: '8', 
    title: 'Praia de Kamari', 
    category: 'Praias', 
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600',
    localizacao: 'Costa leste de Santorini',
    saida: 'Calçadão beira-mar de Kamari',
    duracao: 'Meio período ou dia inteiro',
    destaques: ['• Praia exótica com areia preta vulcânica', '• Calçadão repleto de bares e espreguiçadeiras', '• Águas cristalinas ideais para mergulho']
  }
];

export default function ListScreenPoints({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredData = selectedCategory === 'Todos' 
    ? DATA 
    : DATA.filter(item => item.category === selectedCategory);

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <Card item={item} />
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