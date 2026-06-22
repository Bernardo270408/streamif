// App.jsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import CatalogScreen from './screens/CatalogScreen';
import AddMediaForm from './components/AddMediaForm';
import DetailScreen from './screens/DetailScreen';
import { styles } from './styles/style';

export default function App() {
  const [midias, setMidias] = useState([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const [telaAtual, setTelaAtual] = useState('catalogo');
  const [midiaSelecionada, setMidiaSelecionada] = useState(null);
  const [tipoOrdenacao, setTipoOrdenacao] = useState('az');

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

  const alternarOrdenacao = () => {
    if (tipoOrdenacao === 'az') {
      setTipoOrdenacao('nota');
    } else {
      setTipoOrdenacao('az');
    }
  };

  const midiasOrdenadas = [...midias];

  if (tipoOrdenacao === 'az') {
    midiasOrdenadas.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
  } else {
    midiasOrdenadas.sort((a, b) =>
      b.nota - a.nota
    );
  }

  let screen = (
    <CatalogScreen
      midias={midiasOrdenadas}              
      tipoOrdenacao={tipoOrdenacao}         
      alternarOrdenacao={alternarOrdenacao}
      aoAlternarAssistido={alternarAssistido}
      aoRemover={removerMidia}
      aoAbrirDetalhes={abrirDetalhes}
      abrirModal={() => setModalVisivel(true)}
    />
  );

  if (telaAtual === 'detalhes') {
    screen = (
      <DetailScreen
        midia={midiaSelecionada}
        aoVoltar={voltarCatalogo}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen}

      <AddMediaForm 
        visivel={modalVisivel}
        aoSalvar={adicionarMidia}
        aoCancelar={() => setModalVisivel(false)}
      />
    </SafeAreaView>
  );
}