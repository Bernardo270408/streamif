import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import CatalogScreen from './screens/CatalogScreen';
import AddMediaForm from './components/AddMediaForm';

export default function App() {
  const [midias, setMidias] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const adicionarMidia = (novaMidia) => {
    setMidias([...midias, novaMidia]);
    setModalVisivel(false);
  };

  const alternarAssistido = (id) => {
    const listaAtualizada = midias.map((midia) => {
      if (midia.id === id) {
        return { ...midia, assistido: !midia.assistido };
      }
      return midia;
    });
    setMidias(listaAtualizada);
  };

  const removerMidia = (id) => {
    const listaFiltrada = midias.filter((midia) => midia.id !== id);
    setMidias(listaFiltrada);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CatalogScreen 
        midias={midias} 
        aoAlternarAssistido={alternarAssistido}
        aoRemover={removerMidia}
        aoAbrirDetalhes={(item) => console.log('Abrir detalhes de:', item)} // Conectar com F3 posteriormente
        abrirModal={() => setModalVisivel(true)}
      />

      <AddMediaForm 
        visivel={modalVisivel}
        aoSalvar={adicionarMidia}
        aoCancelar={() => setModalVisivel(false)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
