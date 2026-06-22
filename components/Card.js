import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Card({ title, imageUrl, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>VER DETALHES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 140,
    height: 180,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#112D4E',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#5C82A6',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }
});