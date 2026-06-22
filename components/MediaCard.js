import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';
import { styles } from '../styles/MediaCard';

export default function MediaCard({ item, aoAlternarAssistido, aoRemover, aoAbrirDetalhes }) {
  
  let corDaNota = COLORS.green;
  if (item.nota >= 7) corDaNota = COLORS.green;
  else if (item.nota >= 4 && item.nota <= 6) corDaNota = COLORS.yellow;
  else corDaNota = COLORS.red;

  return (
    <TouchableOpacity 
      onPress={() => aoAlternarAssistido(item.id)}
      onLongPress={() => aoAbrirDetalhes(item)}
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo} numberOfLines={1}>{item.titulo}</Text>
          <Text style={[styles.nota, { color: corDaNota }]}>★ {item.nota}</Text>
        </View>

        <Text style={styles.genero}>{item.genero}</Text>

        <View style={styles.rodape}>
          <Text style={styles.statusTexto}>
            Status: <Text style={item.assistido ? styles.assistido : styles.pendente}>
              {item.assistido ? '✓ Já assisti' : 'Pendente'}
            </Text>
          </Text>
          
          <Button title="Excluir" color={COLORS.red} onPress={() => aoRemover(item.id)} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
