import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🍿</Text>
      <Text style={styles.titulo}>Nada por aqui</Text>
      <Text style={styles.texto}>Toque no botão "+ Adicionar" acima para registrar um filme ou série.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  icone: {
    fontSize: 48,
    marginBottom: 12,
  },
  titulo: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  texto: {
    color: COLORS.subtext,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});