// components/AddMediaForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

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
    <Modal visible={visivel} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalBody}>
          <Text style={styles.titulo}>Adicionar Nova Mídia</Text>

          {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
  
          <TextInput 
            style={styles.input}
            placeholder="Título da série/filme" 
            placeholderTextColor={COLORS.subtext}
            value={titulo} 
            onChangeText={setTitulo} 
          />
          <TextInput 
            style={styles.input}
            placeholder="Gênero (Ex: Ficção, Drama)" 
            placeholderTextColor={COLORS.subtext}
            value={genero} 
            onChangeText={setGenero} 
          />
          <TextInput 
            style={styles.input}
            placeholder="Nota pessoal (1 a 10)" 
            placeholderTextColor={COLORS.subtext}
            value={nota} 
            onChangeText={setNota} 
            keyboardType="numeric" 
          />

          <View style={styles.botoesAcao}>
            <View style={{flex: 1, marginRight: 8}}>
              <Button title="Cancelar" color={COLORS.red} onPress={lidarComCancelar} />
            </View>
            <View style={{flex: 1}}>
              <Button title="Salvar" color={COLORS.green} onPress={lidarComSalvar} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 17, 27, 0.85)', // crust com 85% de opacidade
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: COLORS.mantle,
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface0,
  },
  titulo: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.crust,
    color: COLORS.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.surface0,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
  },
  erro: {
    color: COLORS.red,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  botoesAcao: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  }
});