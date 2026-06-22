import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import MediaCard from '../components/MediaCard';
import EmptyState from '../components/EmptyState';
import { createStyles } from '../styles/CatalogScreen'; 
import { useStyles } from '../hooks/useStyles';
// 1. Importar o hook do seu ThemeContext
import { useTheme } from '../styles/ThemeContext';

export default function CatalogScreen({ 
  midias, 
  aoAlternarAssistido, 
  aoRemover, 
  aoAbrirDetalhes, 
  abrirModal, 
  tipoOrdenacao, 
  alternarOrdenacao 
}) {
  const styles = useStyles(createStyles); 
  // 2. Extrair a função de alternar o tema
  const { toggleTheme } = useTheme();

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
        {totalTitulos} {totalTitulos === 1 ? 'título' : 'títulos'} cadastrados  •  
        <Text style={styles.contadorDestaque}> &nbsp;{totalAssistidos} assistidos</Text>
      </Text>

      <View style={styles.barraBotoes}>
        <View style={styles.botaoWrapper}>
          <TouchableOpacity 
            style={styles.botaoSucesso} 
            onPress={abrirModal}
            activeOpacity={0.7}
          >
            <Text style={styles.botaoSucessoTexto}>+ Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botaoWrapper}>
          <TouchableOpacity 
            style={styles.botaoSecundario} 
            onPress={alternarOrdenacao}
            activeOpacity={0.7}
          >
            <Text style={styles.botaoSecundarioTexto}>
              {tipoOrdenacao === 'az' ? 'Ordem: A-Z' : 'Ordem: Nota'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 3. Novo botão para alternar o tema */}
        <View style={styles.botaoWrapper}>
          <TouchableOpacity 
            style={styles.botaoSecundario} 
            onPress={toggleTheme}
            activeOpacity={0.7}
          >
            <Text style={styles.botaoSecundarioTexto}>Mudar Tema</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}