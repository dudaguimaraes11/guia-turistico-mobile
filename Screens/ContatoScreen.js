import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  
  const handleContactPress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho Simplificado */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Central de Ajuda</Text>
          <Text style={styles.headerDescription}>
            Precisa de suporte com reservas ou roteiros em Santorini? Entre em contato por um de nossos canais abaixo.
          </Text>
        </View>

        {/* Lista de Canais Diretos */}
        <View style={styles.listContainer}>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('https://wa.me/302286000000')}
          >
            <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>WhatsApp</Text>
              <Text style={styles.itemSubtitle}>Atendimento das 08h às 22h</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9FB3C8" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('tel:+302286011111')}
          >
            <Ionicons name="call-outline" size={24} color="#2A4E6C" />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>Telefone</Text>
              <Text style={styles.itemSubtitle}>Ligar para o nosso concierge</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9FB3C8" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('mailto:concierge@santorini.com')}
          >
            <Ionicons name="mail-outline" size={24} color="#2A4E6C" />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>E-mail</Text>
              <Text style={styles.itemSubtitle}>concierge@santorini.com</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9FB3C8" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Santorini Guide App v2.4.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    marginTop: 40,
    marginBottom: 32,
  },
  headerTitle: { 
    color: '#1A2E40', 
    fontWeight: '800', 
    fontSize: 28,
    letterSpacing: -0.5,
  },
  headerDescription: {
    color: '#627D93',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  listContainer: {
    backgroundColor: '#F2F5F8',
    borderRadius: 16,
    paddingVertical: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A2E40',
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#627D93',
    marginTop: 2,
  },
  footerText: {
    textAlign: 'center',
    color: '#BACDD9',
    fontSize: 12,
    marginTop: 48,
  },
});