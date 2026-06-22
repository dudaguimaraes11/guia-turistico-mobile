import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/e1/22/35/e122354fe2928ef9915ca9ac61ebc74e.jpg',
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />

        <View style={styles.heroText}>
          <Text style={styles.headerSubtitle}>BEM-VINDO A</Text>
          <Text style={styles.title}>Santorini</Text>
          <Text style={styles.subtitle}>
            Descubra as cúpulas azuis, falésias impressionantes e o inesquecível mar Egeu.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.searchCTA}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Pontos Turísticos')}
      >
        <Ionicons name="search-outline" size={20} color="#5C82A6" />
        <Text style={styles.searchCTAText}>Para onde você quer ir?</Text>
        <View style={styles.searchBadge}>
          <Ionicons name="options-outline" size={16} color="#fff" />
        </View>
      </TouchableOpacity>

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconItem} onPress={() => navigation.navigate('Sobre')}>
          <View style={styles.iconCircle}>
            <Ionicons name="boat-outline" size={24} color="#2A4E6C" />
          </View>
          <Text style={styles.iconLabel}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconItem} onPress={() => navigation.navigate('Pontos Turísticos')}>
          <View style={styles.iconCircle}>
            <Ionicons name="camera-outline" size={24} color="#2A4E6C" />
          </View>
          <Text style={styles.iconLabel}>Turismo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconItem} onPress={() => navigation.navigate('Restaurantes')}>
          <View style={styles.iconCircle}>
            <Ionicons name="restaurant-outline" size={24} color="#2A4E6C" />
          </View>
          <Text style={styles.iconLabel}>Comida</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Destaques imperdíveis</Text>
        <Text style={styles.sectionSeeAll} onPress={() => navigation.navigate('Pontos Turísticos')}>
          Ver todos
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.highlightsContainer}
      >
        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Oia</Text>
          <Text style={styles.highlightLocation}>📍 Pôr do sol clássico</Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Fira</Text>
          <Text style={styles.highlightLocation}>📍 Capital agitada</Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Caldera</Text>
          <Text style={styles.highlightLocation}>📍 Vista vulcânica</Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Imerovigli</Text>
          <Text style={styles.highlightLocation}>📍 Varanda da ilha</Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Akrotiri</Text>
          <Text style={styles.highlightLocation}>📍 História e praias</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 26, 27, 0.45)', 
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroText: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 60, 
  },
  headerSubtitle: {
    color: '#E0F2FE',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1,
  },
  subtitle: {
    color: '#F1F5F9',
    fontSize: 15,
    marginTop: 8,
    lineHeight: 22,
    fontWeight: '500',
  },
  searchCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 10,
    borderRadius: 100,
    marginTop: -30, 
    shadowColor: '#1A2E40',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    elevation: 8,
  },
  searchCTAText: {
    flex: 1,
    color: '#627D93',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  searchBadge: {
    backgroundColor: '#2A4E6C',
    padding: 10,
    borderRadius: 100,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 32,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#F2F5F8',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    color: '#1A2E40',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A2E40',
    letterSpacing: -0.3,
  },
  sectionSeeAll: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5C82A6',
  },
  highlightsContainer: {
    paddingLeft: 24,
    paddingRight: 12,
    marginTop: 16,
  },
  highlightCard: {
    marginRight: 16,
    width: 160,
  },
  highlightImage: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  highlightTitle: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '800',
    color: '#1A2E40',
  },
  highlightLocation: {
    fontSize: 11,
    color: '#627D93',
    fontWeight: '600',
    marginTop: 2,
  },
});