// components/AddMediaForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

export default function AddMediaForm({ visivel, aoSalvar, aoCancelar }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [nota, setNota] = useState('');
  const [erro, setErro] = useState('');

  const lidarComSalvar = () => {
    const notaNumerica = parseFloat(nota);
  
    if (titulo.trim() === '') {
      setErro('O título não pode estar vazio.');
      return;
    }
    if (genero.trim() === '') {
      setErro('O gênero não pode estar vazio.');
      return;
    }
  
    if (isNaN(notaNumerica) || notaNumerica < 1 || notaNumerica > 10) {
      setErro('A nota deve estar entre 1 e 10.');
      return;
    }
  
    setErro('');
  
    const novaMidia = {
      id: Date.now().toString(),
      titulo: titulo,
      genero: genero,
      nota: notaNumerica,
      assistido: false
    };
  
    aoSalvar(novaMidia);
  
    setTitulo('');
    setGenero('');
    setNota('');
    setErro('');
  };
  const lidarComCancelar = () => {
    setTitulo('');
    setGenero('');
    setNota('');
    setErro('');
    aoCancelar();
  };

  return (
    <Modal visible={visivel} animationType="slide">
      <View>
        <Text> Adicionar Nova Mídia </Text>

        {erro !== '' && (
          <Text style={styles.erro}>
            {erro}
          </Text>
        )}
  
        <TextInput 
          placeholder="Título da série/filme" 
          value={titulo} 
          onChangeText={setTitulo} 
        />

        <TextInput 
          placeholder="Gênero" 
          value={genero} 
          onChangeText={setGenero} 
        />

        <TextInput 
          placeholder="Nota pessoal (1 a 10)" 
          value={nota} 
          onChangeText={setNota} 
          keyboardType="numeric" 
        />

        <Button title="Salvar" onPress={lidarComSalvar} />
        <Button title="Cancelar" onPress={lidarComCancelar} />
      </View>
    </Modal>
  );
  
}

const styles = StyleSheet.create({
  erro: {
    color: 'red',
  },
});
