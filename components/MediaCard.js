import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.mantle,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.surface0,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  nota: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  genero: {
    color: COLORS.mauve,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 12,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.surface0,
    paddingTop: 10,
  },
  statusTexto: {
    color: COLORS.subtext,
    fontSize: 13,
  },
  assistido: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  pendente: {
    color: COLORS.yellow,
    fontWeight: '500',
  }
});