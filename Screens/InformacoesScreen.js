import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetalhesScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="#2A4E6C" />
        <Ionicons name="search" size={24} color="#2A4E6C" />
      </View>

      <View style={styles.tag}>
        <Text style={styles.tagText}>DETALHES</Text>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.text}>
            <Text style={styles.bold}>Localização:</Text> Santorini, Grécia
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Duração:</Text> 4 a 6 horas
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Descrição:</Text> Experiência única para conhecer um dos pontos mais incríveis da ilha.
          </Text>
        </View>
      </View>

      <View style={styles.tag}>
        <Text style={styles.tagText}>GALERIA</Text>
      </View>

      <View style={styles.gallery}>
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            source={{ uri: item.image }}
            style={styles.galleryImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  tag: {
    backgroundColor: "#2A4E6C",
    marginHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 10,
  },

  tagText: {
    color: "#fff",
    fontWeight: "800",
    letterSpacing: 1,
  },

  card: {
    backgroundColor: "#F2F5F8",
    margin: 15,
    borderRadius: 20,
    padding: 15,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1A2E40",
    marginBottom: 10,
  },

  infoBlock: {
    gap: 6,
  },

  text: {
    fontSize: 13,
    color: "#2A4E6C",
    lineHeight: 18,
  },

  bold: {
    fontWeight: "bold",
    color: "#1A2E40",
  },

  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  galleryImage: {
    width: "48%",
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
});