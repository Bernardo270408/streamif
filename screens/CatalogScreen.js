import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import MediaCard from '../components/MediaCard';
import EmptyState from '../components/EmptyState';
import { COLORS } from '../styles/theme';
import { styles } from '../styles/CatalogScreen';

export default function CatalogScreen({ midias, aoAlternarAssistido, aoRemover, aoAbrirDetalhes, abrirModal, tipoOrdenacao, alternarOrdenacao }) {
  
  const totalTitulos = midias.length;
  const totalAssistidos = midias.filter((m) => m.assistido).length;
  
  return (
    <View style={styles.container}>
      <FlatList
        data={midias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MediaCard 
            item={item} 
            aoAlternarAssistido={aoAlternarAssistido}
            aoRemover={aoRemover}
            aoAbrirDetalhes={aoAbrirDetalhes}
          />
        )}
        ListEmptyComponent={EmptyState}
        contentContainerStyle={styles.lista}
      />

      <Text style={styles.contador}>
        {totalTitulos} {totalTitulos === 1 ? 'título' : 'títulos'} cadastrados  •  <Text style={{color: COLORS.green}}>{totalAssistidos} assistidos</Text>
      </Text>
      <View style={styles.barraBotoes}>
        <View style={styles.botaoWrapper}>
          <Button title="+ Adicionar" color={COLORS.green} onPress={abrirModal} />
        </View>

        <View style={styles.botaoWrapper}>
          <Button
            title={tipoOrdenacao === 'az' ? 'Ordem: A-Z' : 'Ordem: Nota'}
            color={COLORS.surface0}
            onPress={alternarOrdenacao}
          />
        </View>
      </View>
    </View>
  );
}

