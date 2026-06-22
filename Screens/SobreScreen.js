import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.aboutCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="information-circle" size={24} color="#466a8b" style={{ marginRight: 8 }} />
          <Text style={styles.headerText}>Sobre a Agência</Text>
        </View>
        
        <Text style={styles.cardTextDark}>
          A <Text style={styles.boldTextDark}>Santorini Getaways Travel</Text> nasceu com a missão de oferecer uma perspectiva diferente sobre o turismo em Santorini. Nosso objetivo é proporcionar experiências de alta qualidade que destacam tanto os pontos turísticos clássicos quanto os tesouros escondidos da ilha, preservando sua herança e beleza natural.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Por que viajar conosco?</Text>
      <View style={styles.darkCard}>
        
        <View style={styles.benefitRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="earth" size={22} color="#fff" />
          </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitTitle}>Guias Especializados</Text>
            <Text style={styles.benefitDesc}>Tours realizados em inglês (ou outros idiomas sob consulta) com profundo conhecimento local.</Text>
          </View>
        </View>

        <View style={styles.benefitRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="bus" size={22} color="#fff" />
          </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitTitle}>Conveniência</Text>
            <Text style={styles.benefitDesc}>Serviço de busca (pick-up) e desembarque (drop-off) na maioria dos hotéis da ilha.</Text>
          </View>
        </View>

        <View style={styles.benefitRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="time" size={22} color="#fff" />
          </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitTitle}>Flexibilidade</Text>
            <Text style={styles.benefitDesc}>Opções de meio dia ou dia inteiro, adaptando-se perfeitamente ao seu ritmo de viagem.</Text>
          </View>
        </View>

        {/* Item 4 */}
        <View style={styles.benefitRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="star" size={22} color="#fff" />
          </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitTitle}>Foco na Qualidade</Text>
            <Text style={styles.benefitDesc}>Grupos reduzidos para garantir uma imersão real e intimista na cultura grega.</Text>
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', 
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 25, // Espaçamento correto no topo agora
    paddingBottom: 40,
  },
  aboutCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3, 
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingBottom: 10,
  },
  headerText: {
    color: '#466a8b',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardTextDark: {
    color: '#4A4A4A',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  boldTextDark: {
    fontWeight: 'bold',
    color: '#112D4E',
  },
  sectionTitle: {
    color: '#112D4E',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 15,
    marginLeft: 5,
  },
  darkCard: {
    backgroundColor: '#112D4E',
    borderRadius: 25,
    padding: 25,
    shadowColor: '#112D4E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  benefitRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#466a8b',
    padding: 10,
    borderRadius: 12,
    marginRight: 15,
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  benefitDesc: {
    color: '#D3DDE6', 
    fontSize: 14,
    lineHeight: 20,
  },
});