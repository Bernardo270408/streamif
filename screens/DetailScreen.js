import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';
import { styles } from '../styles/DetailScreen';

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

