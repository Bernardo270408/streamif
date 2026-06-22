// components/MediaCard.js
import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function MediaCard({ item, aoAlternarAssistido, aoRemover, aoAbrirDetalhes }) {
  
  let corDaNota = 'black';
  if (item.nota >= 7) {
    corDaNota = 'green';
  } else if (item.nota >= 4 && item.nota <= 6) {
    corDaNota = 'yellow';
  } else if (item.nota <= 3) {
    corDaNota = 'red';
  }

  return (
    <TouchableOpacity 
      onPress={() => aoAlternarAssistido(item.id)}
      onLongPress={() => aoAbrirDetalhes(item)}
    >
      <View style={styles.container}>
        <Text>Título: {item.titulo}</Text>
        <Text>Gênero: {item.genero}</Text>
        <Text style={{ color: corDaNota }}>Nota: {item.nota}</Text>
        <Text>Status: {item.assistido ? 'Já assisti' : 'Não assistido'}</Text>
        
        <Button title="Excluir" onPress={() => aoRemover(item.id)} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
