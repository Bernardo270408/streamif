import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ midia, aoVoltar }) {
  const [anotacoes, setAnotacoes] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Título: {midia.titulo}</Text>
      <Text>Gênero: {midia.genero}</Text>
      <Text>Nota: {midia.nota}</Text>

      <Text>
        Status: {midia.assistido ? 'Assistido' : 'Não assistido'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite suas observações..."
        value={anotacoes}
        onChangeText={setAnotacoes}
        multiline
      />

      <Button
        title="Voltar"
        onPress={aoVoltar}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    minHeight: 100,
    padding: 10,
    marginVertical: 10,
  },
});
