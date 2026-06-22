import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStyles } from '../styles/MediaCard'; 
import { useStyles } from '../hooks/useStyles';

export default function MediaCard({ item, aoAlternarAssistido, aoRemover, aoAbrirDetalhes }) {
  const styles = useStyles(createStyles);

  const obterEstiloNota = (nota) => {
    if (nota >= 7) return styles.notaVerde;
    if (nota >= 4) return styles.notaAmarela; 
    return styles.notaVermelha;
  };

  return (
    <TouchableOpacity 
      onPress={() => aoAlternarAssistido(item.id)}
      onLongPress={() => aoAbrirDetalhes(item)}
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo} numberOfLines={1}>{item.titulo}</Text>
          <Text style={[styles.nota, obterEstiloNota(item.nota)]}>★ {item.nota}</Text>
        </View>

        <Text style={styles.genero}>{item.genero}</Text>

        <View style={styles.rodape}>
          <Text style={styles.statusTexto}>
            Status: <Text style={item.assistido ? styles.assistido : styles.pendente}>
              {item.assistido ? '✓ Já assisti' : 'Pendente'}
            </Text>
          </Text>
          
          <TouchableOpacity accessibilityRole="button" onPress={() => aoRemover(item.id)}>
            <Text style={styles.botaoExcluirTexto}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}