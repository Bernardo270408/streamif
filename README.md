# StreamIF </br>

## Integrantes

Beatriz Cristina Costa, AQ3022153</br>
Bernardo
</br>

## Descrição do Aplicativo

O StreamIF é um aplicativo desenvolvido em React Native para gerenciamento de filmes e séries. O usuário pode cadastrar mídias, visualizar informações, marcar conteúdos como assistidos e consultar detalhes de cada item.</br></br>


## Funcionalidades Implementadas

Cadastro de séries e filmes através de Modal.
Listagem utilizando FlatList.
Marcação de mídias como assistidas.
Remoção de mídias utilizando Array.filter().
Tela de detalhes com ScrollView.
Campo de anotações pessoais.
Contador dinâmico de títulos e assistidos.
Ordenação por ordem alfabética (A-Z) e por nota.
Validação de formulário com mensagens de erro no Modal.</br></br>


## Como Executar o Projeto

1 Instalar as dependências:

npm install

2 Iniciar o projeto:

npm start

3 Executar no Android:

npm run android </br></br>

## Diário de Depuração

Bug 1:
<!-- O primeiro problema encontrado, por parte do aluno Bernardo, foi um redbox ao tentar executar a aplicação no próprio celular, dado por incompatibilidade na versão dos pacotes NPM: O sistema utilizado era Arch Linux, conhecido por ter pacotes na última versão (Bleeding Edge). Isso resultou em uma incompatibilidade com o aplicativo do Expo disponível na Play Store, e para contornar o problema foi necessário usar um ambiente local. -->

Bug 2:
(A ser preenchido após os testes finais) </br></br>

## Justificativa Arquitetural:

O estado principal da aplicação foi centralizado no componente App.js, que atua como orquestrador do sistema. Dessa forma, App.js é o responsável por armazenar e atualizar a lista de mídias, controlar a visibilidade do Modal e gerenciar a navegação entre as telas.

Os componentes filhos recebem dados através de props (fluxo Top-Down) e enviam eventos para o componente pai através de funções passadas por props (fluxo Bottom-Up).

Exemplo:

AddMediaForm envia uma nova mídia para App.js através da função aoSalvar.
CatalogScreen recebe a lista de mídias através de props.
MediaCard recebe informações individuais de cada mídia e dispara eventos de remoção ou alteração de status.
DetailScreen recebe a mídia selecionada para exibição dos detalhes.

Essa organização permite melhor reutilização dos componentes, manutenção simplificada e separação de responsabilidades.

</br></br>

