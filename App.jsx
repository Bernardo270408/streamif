import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CatalogScreen from './screens/CatalogScreen';
import AddMediaForm from './components/AddMediaForm';
import DetailScreen from './screens/DetailScreen';

export default function App() {
  const [midias, setMidias] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const [telaAtual, setTelaAtual] = useState('catalogo');
  const [midiaSelecionada, setMidiaSelecionada] = useState(null);

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

  const abrirDetalhes = (item) => {
  setMidiaSelecionada(item);
  setTelaAtual('detalhes');
};

const voltarCatalogo = () => {
  setTelaAtual('catalogo');
};

let screen = (
<CatalogScreen
midias={midias}
aoAlternarAssistido={alternarAssistido}
aoRemover={removerMidia}
aoAbrirDetalhes={abrirDetalhes}
abrirModal={() => setModalVisivel(true)}
/>
);

if (telaAtual === 'detalhes') {
screen = (

);
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen}

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
