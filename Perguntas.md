## Questões de Verificações:


### Q1 – Sobre Props e Fluxo de Dados

Os dados são digitados nos TextInputs do componente AddMediaForm e armazenados em estados usando useState. Quando o usuário clica em "Salvar", a função aoSalvar envia os dados para o App.js, que adiciona a nova mídia ao array principal.

Diagrama:

TextInput > useState > lidarComSalvar() > aoSalvar(novaMidia) > adicionarMidia() >  setMidias() > Array de mídias no App.js


### Q2 – Sobre FlatList vs ScrollView

Foi utilizada FlatList no catálogo por ser mais eficiente para listas grandes, carregando apenas os itens visíveis na tela. A ScrollView foi usada na tela de detalhes porque exibe apenas as informações de uma mídia.

Se fosse usada ScrollView em uma lista com 500 itens, todos seriam carregados ao mesmo tempo, consumindo mais memória e deixando o aplicativo mais lento.


### Q3 – Sobre Modal

A propriedade que controla a visibilidade do Modal é:

visible={visivel}


Ela recebe um valor booleano (true ou false).

O estado foi declarado no App.js:


const [modalVisivel, setModalVisivel] = useState(false);


### Q4 – Sobre Imutabilidade

const removerMidia = (id) => {
  const listaFiltrada = midias.filter(
    (midia) => midia.id !== id
  );

  setMidias(listaFiltrada);
};


Não é recomendado usar splice() ou delete, pois alteram o array original. No React, deve-se criar um novo array para que a interface seja atualizada corretamente.


### Q5 – Sobre Depuração

A saída do console.log aparece no terminal do Metro Bundler e também pode ser vista durante a depuração remota.

A depuração remota pode ser ativada pelo menu de desenvolvedor do Expo.

Red Box indica um erro que impede o funcionamento do aplicativo.

Yellow Box indica um aviso. O aplicativo continua funcionando, mas há algo a ser corrigido.


### Q6 – Pergunta-Armadilha de Arquitetura

O código apresenta os seguintes problemas:

1 Uso de variáveis comuns em vez de useState
2 Alteração direta de variável no TextInput
3 Uso de push(), modificando o array original
4 Interface não atualiza automaticamente
5 Componente dentro do App.js
6 Estilos inline
7 Uso de ScrollView para lista
8 Itens sem key
9 ID gerado com Math.random()

A solução correta envolve uso de useState, atualização imutável dos dados, uso de FlatList para listas, separação de componentes em arquivos próprios, criação de estilos com StyleSheet.create() e geração de IDs com Date.now().
