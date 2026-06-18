import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

export default function AddMediaForm({ visivel, aoSalvar, aoCancelar }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [nota, setNota] = useState('');

  const lidarComSalvar = () => {
    const notaNumerica = parseFloat(nota);
    
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
  };

  const lidarComCancelar = () => {
    setTitulo('');
    setGenero('');
    setNota('');
    aoCancelar();
  };

  return (
    <Modal visible={visivel} animationType="slide">
      <View>
        <Text>Adicionar Nova Mídia</Text>

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