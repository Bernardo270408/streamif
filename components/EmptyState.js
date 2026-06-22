import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/EmptyState';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🍿</Text>
      <Text style={styles.titulo}>Nada por aqui</Text>
      <Text style={styles.texto}>Toque no botão "+ Adicionar" acima para registrar um filme ou série.</Text>
    </View>
  );
}

