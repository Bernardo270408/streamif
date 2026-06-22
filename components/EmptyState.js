// /components/EmptyState.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStyles } from '../styles/EmptyState';
import { useStyles } from '../hooks/useStyles';

export default function EmptyState() {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🍿</Text>

      <Text style={styles.titulo}>
        Nada por aqui
      </Text>

      <Text style={styles.texto}>
        Toque no botão "+ Adicionar" acima para registrar um filme ou série.
      </Text>
    </View>
  );
}