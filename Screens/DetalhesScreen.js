import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from "react-native";

export default function DetalhesScreen({ route }) {
  // Captura os dados enviados de forma dinâmica ou usa um fallback seguro
  const { item } = route.params || { 
    item: { 
      title: "CALDEIRA DE SANTORINI", 
      image: "https://i.pinimg.com/736x/25/6d/76/256d762e2437bde3694aa98114986bed.jpg",
      localizacao: "Santorini, Grécia",
      saida: "Porto de Fira",
      duracao: "4 a 6 horas",
      destaques: ["• Vista linda", "• Vulcão ativo"]
    } 
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#466a8b" />

      {/* Título da Seção */}
      <View style={styles.tag}>
        <Text style={styles.tagText}>DETALHES</Text>
      </View>

      {/* Bloco de Informações Dinâmicas */}
      <View style={styles.card}>
        <Text style={styles.title}>{item.title.toUpperCase()}</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.text}>
            <Text style={styles.bold}>Localização:</Text> {item.localizacao}
          </Text>
          
          <Text style={styles.text}>
            <Text style={styles.bold}>Saída / Acesso:</Text> {item.saida}
          </Text>
          
          <Text style={styles.text}>
            <Text style={styles.bold}>Duração:</Text> {item.duracao}
          </Text>

          <Text style={[styles.bold, styles.text, { marginTop: 8 }]}>Destaques:</Text>
          {item.destaques && item.destaques.map((destaque, index) => (
            <Text key={index} style={styles.text}>{destaque}</Text>
          ))}
        </View>
      </View>

      {/* Galeria Escura conforme o protótipo */}
      <View style={styles.galleryContainer}>
        <View style={styles.galleryTag}>
          <Text style={styles.galleryTagText}>GALERIA</Text>
        </View>

        <View style={styles.gallery}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Image source={{ uri: item.image }} style={styles.image} />
          <Image source={{ uri: item.image }} style={styles.image} />
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
  tag: { 
    backgroundColor: "#6a8caf", // Tom de azul acinzentado idêntico à imagem_7ea82a.jpg
    marginHorizontal: 15, 
    borderRadius: 20, 
    paddingVertical: 10, 
    alignItems: "center", 
    marginTop: 15 
  },
  tagText: { 
    color: "#fff", 
    fontWeight: "800", 
    letterSpacing: 1,
    fontSize: 15
  },
  card: { 
    backgroundColor: "#EBEFEF", // Cor de fundo cinza clara do card do protótipo
    marginHorizontal: 15, 
    marginTop: 15, 
    padding: 20, 
    borderRadius: 20 
  },
  title: { 
    fontSize: 20, 
    fontWeight: "900", 
    color: "#000000", 
    marginBottom: 15, 
    letterSpacing: 0.5 
  },
  infoBlock: { 
    gap: 8 
  },
  text: { 
    fontSize: 14, 
    color: "#000000", 
    lineHeight: 20 
  },
  bold: { 
    fontWeight: "bold", 
    color: "#000000" 
  },
  galleryContainer: { 
    backgroundColor: "#0F283F", // Azul escuro profundo da galeria
    margin: 15, 
    borderRadius: 20, 
    padding: 15, 
    alignItems: "center", 
    marginBottom: 30 
  },
  galleryTag: { 
    backgroundColor: "#FFFFFF", 
    paddingHorizontal: 40, 
    paddingVertical: 6, 
    borderRadius: 20, 
    marginBottom: 15 
  },
  galleryTagText: { 
    color: "#0F283F", 
    fontWeight: "900", 
    fontSize: 14, 
    letterSpacing: 1 
  },
  gallery: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    width: "100%" 
  },
  image: { 
    width: "48%", 
    height: 130, 
    marginVertical: 5, 
    borderRadius: 15 
  }
});