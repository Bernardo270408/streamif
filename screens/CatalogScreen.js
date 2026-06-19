import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import MediaCard from '../components/MediaCard';
import EmptyState from '../components/EmptyState';

export default function CatalogScreen({ midias, aoAlternarAssistido, aoRemover, aoAbrirDetalhes, abrirModal }) {
  const totalTitulos = midias.length;

  const totalAssistidos = midias.filter(
    (midia) => midia.assistido
  ).length;
  
  return (
    <View>
      <Button title="+ Adicionar" onPress={abrirModal} />
      <Text>
        {totalTitulos} títulos | {totalAssistidos} assistidos
      </Text>
      
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
      />
    </View>
  );
}
