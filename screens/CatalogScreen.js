import React from 'react';
import { View, FlatList, Button } from 'react-native';
import MediaCard from '../components/MediaCard';
import EmptyState from '../components/EmptyState';

export default function CatalogScreen({ midias, aoAlternarAssistido, aoRemover, aoAbrirDetalhes, abrirModal }) {
  return (
    <View>
      <Button title="+ Adicionar" onPress={abrirModal} />
      
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