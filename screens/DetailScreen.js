import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { createStyles } from '../styles/DetailScreen';
import { useStyles } from '../hooks/useStyles';

export default function DetailScreen({ midia, aoVoltar }) {
  const styles = useStyles(createStyles);
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
          <Text style={[styles.badgeTexto, midia.assistido && styles.badgeTextoAssistido]}>
            {midia.assistido ? '✓ Assistido' : 'Pendente'}
          </Text>
        </View>
      </View>

      <Text style={styles.label}>Minhas observações:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva detalhes sobre onde parou, o que achou..."
        value={anotacoes}
        onChangeText={setAnotacoes}
        multiline
      />

      <View style={styles.footerBtn}>
        <TouchableOpacity 
          style={styles.botaoVoltar} 
          onPress={aoVoltar}
          activeOpacity={0.7}
        >
          <Text style={styles.botaoVoltarTexto}>← Voltar ao Catálogo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}