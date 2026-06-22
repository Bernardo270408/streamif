// components/EmptyState.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Nenhuma mídia cadastrada no catálogo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  texto: {},
});
