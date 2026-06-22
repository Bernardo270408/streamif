import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

export default function DetailScreen({ midia, aoVoltar }) {
  const [anotacoes, setAnotacoes] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.genero}>{midia.genero}</Text>
      <Text style={styles.titulo}>{midia.titulo}</Text>
      
      <View style={styles.badgesContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>Nota: {midia.nota}/10</Text>
        </View>
        <View style={[styles.badge, midia.assistido ? styles.badgeAssistido : styles.badgePendente]}>
          <Text style={[styles.badgeTexto, midia.assistido && {color: COLORS.mantle}]}>
            {midia.assistido ? '✓ Assistido' : 'Pendente'}
          </Text>
        </View>
      </View>

      <Text style={styles.label}>Minhas observações:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva detalhes sobre onde parou, o que achou..."
        placeholderTextColor={COLORS.subtext}
        value={anotacoes}
        onChangeText={setAnotacoes}
        multiline
      />

      <View style={styles.footerBtn}>
        <Button title="← Voltar ao Catálogo" color={COLORS.blue} onPress={aoVoltar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.base,
    padding: 24,
  },
  genero: {
    color: COLORS.mauve,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  titulo: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  badge: {
    backgroundColor: COLORS.surface0,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeAssistido: {
    backgroundColor: COLORS.green,
  },
  badgePendente: {
    backgroundColor: COLORS.yellow,
  },
  badgeTexto: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 13,
  },
  label: {
    color: COLORS.subtext,
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.mantle,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.surface0,
    borderRadius: 12,
    minHeight: 180,
    padding: 16,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  footerBtn: {
    marginTop: 'auto',
    paddingTop: 20,
  }
});