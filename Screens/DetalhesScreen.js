import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetalhesScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="#fff" />
        <Ionicons name="search" size={24} color="#fff" />
      </View>

      {/* Título */}
      <View style={styles.tag}>
        <Text style={styles.tagText}>DETALHES</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>CALDEIRA DE SANTORINI</Text>

        <Text><Text style={styles.bold}>Localização:</Text> Santorini (na Grécia)</Text>
        <Text><Text style={styles.bold}>Saída:</Text> ponto antigo de Fira ou Imerovigli</Text>
        <Text><Text style={styles.bold}>Duração:</Text> Aproximadamente 4 a 6 horas</Text>

        <Text style={styles.bold}>Destaques:</Text>
        <Text>- Trilhas formadas por rochas vulcânicas</Text>
        <Text>- Vista panorâmica de Santorini e do Mar Egeu</Text>
        <Text>- Experiência única com vista ativa</Text>
      </View>

      {/* Galeria */}
      <View style={styles.tag}>
        <Text style={styles.tagText}>GALERIA</Text>
      </View>

      <View style={styles.gallery}>
        <Image source={{ uri: "https://source.unsplash.com/300x300/?santorini,volcano" }} style={styles.image} />
        <Image source={{ uri: "https://source.unsplash.com/300x300/?beach,greece" }} style={styles.image} />
        <Image source={{ uri: "https://source.unsplash.com/300x300/?cliff,sea" }} style={styles.image} />
        <Image source={{ uri: "https://source.unsplash.com/300x300/?island,greece" }} style={styles.image} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    backgroundColor: "#3b5d7a",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tag: {
    backgroundColor: "#3b5d7a",
    margin: 10,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
  },

  tagText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#d9d9d9",
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  bold: {
    fontWeight: "bold",
  },

  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  image: {
    width: "45%",
    height: 120,
    marginVertical: 5,
    borderRadius: 10,
  },
});