import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { createStyles } from '../styles/AddMediaForm';
import { useStyles } from '../hooks/useStyles';

export default function AddMediaForm({ visivel, aoSalvar, aoCancelar }) {
  const styles = useStyles(createStyles);
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
    <Modal visible={visivel} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalBody}>
          <Text style={styles.titulo}>Adicionar Nova Mídia</Text>

          {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
  
          <TextInput 
            style={styles.input}
            placeholder="Título da série/filme" 
            placeholderTextColor={styles.placeholder.color}
            value={titulo} 
            onChangeText={setTitulo} 
          />
          <TextInput 
            style={styles.input}
            placeholder="Gênero (Ex: Ficção, Drama)" 
            placeholderTextColor={styles.placeholder.color}
            value={genero} 
            onChangeText={setGenero} 
          />
          <TextInput 
            style={styles.input}
            placeholder="Nota pessoal (1 a 10)" 
            placeholderTextColor={styles.placeholder.color}
            value={nota} 
            onChangeText={setNota} 
            keyboardType="numeric" 
          />

          <View style={styles.botoesAcao}>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoCancelar]} 
              onPress={lidarComCancelar}
              activeOpacity={0.7}
            >
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.botao, styles.botaoSalvar]} 
              onPress={lidarComSalvar}
              activeOpacity={0.7}
            >
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}